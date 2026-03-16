const path = require('path');

// Load environment variables FIRST
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary AFTER env is loaded
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dwkib5qbp',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOLDERS = [
  { local: 'public/Communities', cloudinary: 'communities' },
  { local: 'public/Experience', cloudinary: 'experience' },
  { local: 'public/home/hero', cloudinary: 'hero' },
];

async function uploadFile(filePath, folder, publicId) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      public_id: publicId,
      resource_type: 'auto', // auto-detect image/video
      chunk_size: 6000000, // 6MB chunks for large files
    });
    console.log(`✅ Uploaded: ${publicId} -> ${result.secure_url}`);
    return { publicId, url: result.secure_url, resourceType: result.resource_type };
  } catch (error) {
    console.error(`❌ Failed to upload ${publicId}:`, error.message);
    return null;
  }
}

async function processFolder(folderConfig) {
  const { local, cloudinary: cloudFolder } = folderConfig;
  const localPath = path.join(__dirname, '..', local);
  
  if (!fs.existsSync(localPath)) {
    console.log(`⚠️  Folder not found: ${localPath}`);
    return [];
  }
  
  const files = fs.readdirSync(localPath);
  const results = [];
  
  console.log(`\n📁 Processing: ${local} -> ${cloudFolder}`);
  
  for (const file of files) {
    const filePath = path.join(localPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const publicId = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      const result = await uploadFile(filePath, cloudFolder, publicId);
      if (result) {
        results.push({ ...result, originalName: file, folder: cloudFolder });
      }
    }
  }
  
  return results;
}

async function main() {
  console.log('🚀 Starting Cloudinary upload...\n');
  
  const allResults = [];
  
  for (const folder of FOLDERS) {
    const results = await processFolder(folder);
    allResults.push(...results);
  }
  
  // Generate URLs file for easy reference
  const urlsContent = allResults.map(r => 
    `// ${r.folder}/${r.originalName}\n// Type: ${r.resourceType}\nexport const ${r.publicId.toUpperCase().replace(/-/g, '_')}_URL = "${r.url}";\n`
  ).join('\n');
  
  const outputPath = path.join(__dirname, 'cloudinary-urls.js');
  fs.writeFileSync(outputPath, `// Auto-generated Cloudinary URLs\n// Generated at: ${new Date().toISOString()}\n\n${urlsContent}`);
  
  console.log(`\n✨ Done! Uploaded ${allResults.length} files.`);
  console.log(`📝 URLs saved to: scripts/cloudinary-urls.js`);
  
  // Print summary
  console.log('\n📋 Summary:');
  allResults.forEach(r => {
    console.log(`   ${r.folder}/${r.originalName}: ${r.url}`);
  });
}

main().catch(console.error);
