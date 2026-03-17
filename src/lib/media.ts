// Cloudinary Media URLs
// All media hosted on Cloudinary CDN for optimal delivery

export const MEDIA = {
  // Communities folder
  communities: {
    birdFeed: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659608/communities/bird-feed.mp4",
    kidsTimelapse: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659622/communities/kids-timelapse.mp4",
    localDancing: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659641/communities/local-dancing.mp4",
    localUncle: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773659648/communities/local-uncle.jpg",
    ritual: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659659/communities/ritual.mp4",
    shephard: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659669/communities/shephard.mp4",
    yogi: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773659672/communities/yogi.jpg",
  },
  
  // Experience folder
  experience: {
    // backshot: TOO LARGE (128MB) - needs compression or alternative hosting
    bnwGranny: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773659747/experience/bnw-granny.jpg",
    canopyRays: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773659749/experience/canopy-rays.jpg",
    horses: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659829/experience/horses.mp4",
    kids: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773659834/experience/kids.jpg",
    locals: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773659836/experience/locals.jpg",
    solo: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659867/experience/solo.mp4",
  },
  
  // Hero folder
  hero: {
    droneRiver: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659892/hero/drone-river.mp4",
    droneRoad: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659965/hero/drone-road.mp4",
    groupTrek: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773659999/hero/group-trek.mp4",
  },

  // Pictures folder - New media
  pictures: {
    // Videos
    video1: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773733468/pictures/2796268-uhd-3840-2160-25fps.mp4",
    video2: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773733526/pictures/5385964-uhd-4096-2160-25fps.mp4",
    video3: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773732071/jbjxn0ccycewafrllsva.mp4",
    video4: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773732018/warpvpqe4k6cm6zi4slz.mp4",
    // 5992739 video - convert embed to direct URL
    video5: "https://res.cloudinary.com/dvl0cpzsp/video/upload/v1773733526/pictures/5992739-uhd-3840-2160-25fps.mp4",
    
    // Images
    img1: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731989/egqabsjbnrk7r1abcd3t.jpg",
    img2: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731989/jo5j5xvxjwrljsy4jrl9.jpg",
    img3: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731988/vyiami9bni8jdcdlkb7i.jpg",
    img4: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731987/zxaleq5ulzn6dri0m37x.jpg",
    img5: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731986/u9wqf6tn8lgkse49xof7.jpg",
    img6: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731985/vobpdkuglfm542jnm5i5.jpg",
    img7: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731985/aq6zreud1ukrtszcah2k.jpg",
    img8: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731984/sieaysx7xwljy1ezeodu.jpg",
    img9: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731983/fwmckixzif2xhnvu8426.jpg",
    img10: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731982/ivbcj4ygeeynkxjktus3.jpg",
    img11: "https://res.cloudinary.com/dvl0cpzsp/image/upload/v1773731981/bbwb1xcobbstnomcjvvl.jpg",
  },
} as const;

// Helper to get optimized video URL with transformations
export function getOptimizedVideoUrl(url: string, options?: { quality?: string; format?: string }) {
  const { quality = "auto", format = "auto" } = options || {};
  // Insert transformations into Cloudinary URL
  return url.replace("/upload/", `/upload/q_${quality},f_${format}/`);
}

// Helper to get optimized image URL with transformations
export function getOptimizedImageUrl(url: string, options?: { width?: number; quality?: string; format?: string }) {
  const { width, quality = "auto", format = "auto" } = options || {};
  const transforms = [];
  if (width) transforms.push(`w_${width}`);
  transforms.push(`q_${quality}`, `f_${format}`);
  return url.replace("/upload/", `/upload/${transforms.join(",")}/`);
}
