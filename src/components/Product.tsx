import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";


// for mobile devices 
const videospassenger = [
  { src: "/P_completebody.mp4", name: "Complete body" },
  { src: "/P_front.mp4", name: "Front" },
  { src: "/P_cabin.mp4", name: "Cabin" },
  { src: "/P_trunk.mp4", name: "Trunk" },
  { src: "/P_exterior.mp4", name: "Exterior" },
];

const videoscommercial = [
  { src: "/C_completebody.mp4", name: "Complete body" },
  { src: "/C_engine.mp4", name: "Engine" },
  { src: "/C_cabin.mp4", name: "Cabin" },
];

const Product: React.FC = () => {

  // for responsive 
  const [passengerIndex, setPassengerIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);
  
  // Add refs to track the current videos
  const passengerVideoRefs = useRef<HTMLVideoElement[]>([]);
  const commercialVideoRefs = useRef<HTMLVideoElement[]>([]);
  
  // Add state to track video loading
  const [passengerVideosLoaded, setPassengerVideosLoaded] = useState<boolean[]>(
    new Array(videospassenger.length).fill(false)
  );
  const [commercialVideosLoaded, setCommercialVideosLoaded] = useState<boolean[]>(
    new Array(videoscommercial.length).fill(false)
  );

  // Reset references when component mounts
  useEffect(() => {
    passengerVideoRefs.current = passengerVideoRefs.current.slice(0, videospassenger.length);
    commercialVideoRefs.current = commercialVideoRefs.current.slice(0, videoscommercial.length);
  }, []);

  const handleVideoEndPassenger = () => {
    const nextIndex = (passengerIndex + 1) % videospassenger.length;
    setPassengerIndex(nextIndex);
  };

  const handleVideoEndCommercial = () => {
    const nextIndex = (commercialIndex + 1) % videoscommercial.length;
    setCommercialIndex(nextIndex);
  };

  // Play current video when index changes for passenger
  useEffect(() => {
    if (passengerVideoRefs.current[passengerIndex] && passengerVideosLoaded[passengerIndex]) {
      const videoElement = passengerVideoRefs.current[passengerIndex];
      videoElement.currentTime = 0;
      const playPromise = videoElement.play();
      
      // Handle play promise to avoid DOMException
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Passenger video play error:", error);
        });
      }
    }
  }, [passengerIndex, passengerVideosLoaded]);

  // Play current video when index changes for commercial
  useEffect(() => {
    if (commercialVideoRefs.current[commercialIndex] && commercialVideosLoaded[commercialIndex]) {
      const videoElement = commercialVideoRefs.current[commercialIndex];
      videoElement.currentTime = 0;
      const playPromise = videoElement.play();
      
      // Handle play promise to avoid DOMException
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Commercial video play error:", error);
        });
      }
    }
  }, [commercialIndex, commercialVideosLoaded]);

  // Handle video loading states
  const handlePassengerVideoLoaded = (index: number) => {
    setPassengerVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleCommercialVideoLoaded = (index: number) => {
    setCommercialVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

// Desktop functionality - kept intact from your original code
  const [activeTab, setActiveTab] = useState<"passenger" | "commercial">("passenger");
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0);

  const passengerVideos: string[] = ["P_completebody.mp4", "P_front.mp4", "P_cabin.mp4","P_trunk.mp4", "P_exterior.mp4"];
  const commercialVideos: string[] = ["C_completebody.mp4", "C_engine.mp4", "C_cabin.mp4"];

  const passengerThumbnails: string[] = [
    "P_bodythumb.webp",
    "P_frontthumb.webp",
    "P_cabinthumb.webp", 
    "P_trunkthumb.webp", 
    "P_exteriorthumb.webp"
    ];
  const commercialThumbnails: string[] = [
    "C_bodythumb.svg",
    "C_enginethumb.svg",
    "C_cabinthumb.svg",
  ];

  const btnTextPassenger: string[] = [
    "Complete body", 
    "Front", 
    "Cabin", 
    "Trunk", 
    "Exterior"
  ];
  const btnTextCommercial: string[] = [
    "Complete body",
    "Engine",
    "Cabin",
  ];

  const videoSources: string[] =
    activeTab === "passenger" ? passengerVideos : commercialVideos;

  const thumbnailSources: string[] =
    activeTab === "passenger" ? passengerThumbnails : commercialThumbnails;

  const btnTexts: string[] =
    activeTab === "passenger" ? btnTextPassenger : btnTextCommercial;

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Listen to the main window scroll instead of the component's scroll
  useEffect(() => {
    const handleScroll = (): void => {
      if (sectionRef.current) {
        // Get the section's position relative to the viewport
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the viewport
        const visibleSectionHeight = Math.min(viewportHeight, sectionHeight + sectionTop) - 
                                    Math.max(0, sectionTop);
        
        // Calculate the scroll position within the section as a percentage
        const scrollPercentage = (visibleSectionHeight / sectionHeight) * 100;
        
        // Determine which tab should be active based on scroll position
        if (scrollPercentage > 95 && activeTab === "passenger") {
          setActiveTab("commercial");
          setActiveVideo(0);
        } else if (scrollPercentage < 75 && activeTab === "commercial") {
          setActiveTab("passenger");
          setActiveVideo(0);
        }
      }
    };

    // Add event listener to window scroll
    window.addEventListener("scroll", handleScroll);
    
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  useEffect(() => {
    let intervalId: number;

    if (videoRef.current && isPlaying) {
      intervalId = window.setInterval(() => {
        const current = videoRef.current?.currentTime || 0;
        const duration = videoRef.current?.duration || 0;
        if (duration > 0) {
          setVideoProgress((current / duration) * 100);
        }
      }, 100);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        setVideoProgress(0);
        if (isPlaying) {
          videoRef.current?.play();
        }
      });
    }
  }, [activeVideo, activeTab, isPlaying]);

  const handleTabClick = (tab: "passenger" | "commercial"): void => {
    setActiveTab(tab);
    setActiveVideo(0);
    setVideoProgress(0);
  };

  const handleVideoChange = (index: number): void => {
    setActiveVideo(index);
    setVideoProgress(0);
  };

  const togglePlayPause = (): void => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const tabVariants: Variants = {
    active: {
      color: "#ffffff",
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    inactive: {
      color: "#333333",
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const indicatorVariants: Variants = {
    passenger: {
      top: 0,
      height: "50%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    commercial: {
      top: "50%",
      height: "50%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
    {/* Desktop version - kept intact */}
    <div 
      ref={sectionRef}
      className="h-screen w-full bg-black text-white py-10 hidden lg:flex"
    >
      <div className="h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-10 px-5 flex flex-col items-center justify-center"
        >
          <h1 className="text-2xl md:text-5xl text-center font-light leading-snug max-w-3xl ">
            Evolving the drive with{" "}
            <strong className="font-bold">360-degree</strong> comprehensive
            solutions
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-start px-5 md:px-20 pb-20 gap-8">
          <div className="flex gap-16">
            <div className="transform -translate-y-1/2 w-1 h-58 rounded-full bg-gray-500 mt-30 relative">
              <motion.div
                className="absolute w-1 rounded-full bg-white"
                variants={indicatorVariants}
                animate={activeTab}
              ></motion.div>
            </div>

            <div className="flex flex-col gap-12 w-full">
              <motion.div
                className="cursor-pointer"
                variants={tabVariants}
                animate={activeTab === "passenger" ? "active" : "inactive"}
                onClick={() => handleTabClick("passenger")}
                whileTap={{ scale: 0.98 }}
              >
                <h2 className="text-2xl font-semibold">Passenger Vehicles</h2>
                <p className="text-lg mt-2 w-56">
                  Revving up innovation from interior to exterior.
                </p>
              </motion.div>

              <motion.div
                className="cursor-pointer"
                variants={tabVariants}
                animate={activeTab === "commercial" ? "active" : "inactive"}
                onClick={() => handleTabClick("commercial")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <h2 className="text-2xl font-semibold">Commercial Vehicles</h2>
                <p className="text-lg mt-2">
                  Advancing engineering for heavy-duty vehicles.
                </p>
              </motion.div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="md:w-2/3 flex flex-col items-center gap-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="w-full h-64 bg-black relative overflow-hidden flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  key={activeVideo}
                  ref={videoRef}
                  className="w-auto h-full object-cover"
                  src={videoSources[activeVideo]}
                  autoPlay
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setVideoProgress(0);
                  }}
                />
              </motion.div>
              <div className="flex gap-10 items-center">
                {videoSources.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleVideoChange(index)}
                    className={`p-1 cursor-pointer rounded flex flex-col items-center justify-center ${
                      activeVideo === index
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={thumbnailSources[index]}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>{btnTexts[index]}</div>
                  </button>
                ))}
                <button
                  className="w-16 h-16 relative cursor-pointer"
                  onClick={togglePlayPause}
                >
                  <CircularProgressbar
                    value={videoProgress}
                    text={isPlaying ? "" : ""}
                    styles={buildStyles({
                      pathColor: "#fff",
                      trailColor: "rgba(255,255,255,0.3)",
                      textSize: "0px",
                    })}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                  </motion.div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>

    {/* Mobile version - fixed for reliable video playback */}
    <div className="relative w-auto mx-auto py-20 block lg:hidden bg-black">
      {/* Video Container */}
      <h1 className="text-2xl md:text-5xl text-center text-regular max-w-3xl leading-relaxed text-white">
            Evolving the drive with{" "}
            <strong className="font-semibold">360-degree</strong> comprehensive
            solutions
          </h1>
          {/* passenger vehicles */}
          <div>
      <div className="text-center pt-6">
        <h4 className="sg-translate text-xl text-blue mb-2 font-semibold text-[#00bfff]">
          Passenger Vehicles
        </h4>
        <p className="text-white font-sm">
          Revving up innovation <br /> from interior to exterior.
        </p>
      </div>

      <div className="relative w-full aspect-video overflow-hidden rounded-lg flex items-center">
        {videospassenger.map((video, index) => (
          <video
            key={index}
            ref={el => {
              if (el) passengerVideoRefs.current[index] = el;
            }}
            src={video.src}
            className={`absolute w-full h-auto object-cover transition-opacity duration-500 ${
              index === passengerIndex ? "opacity-100" : "opacity-0"
            }`}
            muted
            preload="auto"
            playsInline
            onLoadedData={() => handlePassengerVideoLoaded(index)}
            onEnded={handleVideoEndPassenger}
          />
        ))}
      </div>

      <p className="text-white text-lg text-center mt-3">
        {videospassenger[passengerIndex].name}
      </p>

      <div className="flex justify-center gap-2 mt-3">
        {videospassenger.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === passengerIndex ? "bg-[#00bfff] w-8" : "bg-[#00aeef59]"
            }`}
            onClick={() => setPassengerIndex(index)}
          />
        ))}
      </div>
    </div>

          {/* commercial vehicles */}
          <div className="mt-10">
      <div className="text-center pt-6">
        <h4 className="sg-translate text-xl text-blue mb-2 font-semibold text-[#00bfff]">
          Commercial Vehicles
        </h4>
        <p className="text-white font-sm">
          Revving up innovation <br /> from interior to exterior.
        </p>
      </div>

      <div className="relative w-full aspect-video overflow-hidden rounded-lg flex items-center">
        {videoscommercial.map((video, index) => (
          <video
            key={index}
            ref={el => {
              if (el) commercialVideoRefs.current[index] = el;
            }}
            src={video.src}
            className={`absolute w-full h-auto object-cover transition-opacity duration-500 ${
              index === commercialIndex ? "opacity-100" : "opacity-0"
            }`}
            muted
            preload="auto"
            playsInline
            onLoadedData={() => handleCommercialVideoLoaded(index)}
            onEnded={handleVideoEndCommercial}
          />
        ))}
      </div>

      <p className="text-white text-lg text-center mt-3">
        {videoscommercial[commercialIndex].name}
      </p>

      <div className="flex justify-center gap-2 mt-3">
        {videoscommercial.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === commercialIndex ? "bg-[#00bfff] w-8" : "bg-[#00aeef59]"
            }`}
            onClick={() => setCommercialIndex(index)}
          />
        ))}
      </div>
    </div>
        
    </div>
  </>
  );
};

export default Product;