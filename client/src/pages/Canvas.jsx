import React,{ useState ,useRef } from 'react'
import Navbar from '../components/Navbar'
import ClothingPanel from '../components/ClothingPanel'
import CanvasSlot from '../components/CanvasSlot'
import { DndContext, PointerSensor,useSensor,useSensors} from '@dnd-kit/core'
import { BASE_URL, getAuthHeader } from '../utils/api'
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

const Canvas = () => {

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const shoesRef = useRef(null);
  const accessoryRef = useRef(null);
  const canvasRef = useRef(null);
  const recommendationsRef = useRef(null);
  const [isRecommendationApplied, setIsRecommendationApplied] = useState(false);
  const [highlightSlot, setHighlightSlot] = useState(null)

  const [selectedOutfit, setSelectedOutfit] = useState({
    top:null,
    bottom:null,
    shoes:null,
    accessory:null
  })

  const [isStyling, setIsStyling] = useState(false)
  const [recommendations, setRecommendations] = useState([]);

  const categoryMap = {
  top: "top",
  bottom: "bottom",
  shoes: "shoes",
  accessory: "accessory",
  };

  function handleDragEnd(event){
    const {active,over} = event
    if(!over){
      return;
    }
    const draggedItem = active.data.current.item;
    if (categoryMap[draggedItem.category] !== over.id) {
      return;
    }
    setSelectedOutfit((prev)=>({
      ...prev,
      [over.id]: draggedItem,
    }))
  }

  const refs = {
    top: topRef,
    bottom: bottomRef,
    shoes: shoesRef,
    accessory: accessoryRef,
  }

  const handleMobileSelect = (item) => {
    const slot = categoryMap[item.category];

    if (isRecommendationApplied) {
    setSelectedOutfit({
        top: null,
        bottom: null,
        shoes: null,
        accessory: null,
        [slot]: item
    });

    setIsRecommendationApplied(false);

    }else{
      setSelectedOutfit(prev => ({
        ...prev,
        [slot]: item
      }));
    }

    

    if(window.innerWidth < 768){
      setTimeout(()=>{
        refs[slot]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      },100)
    }

    setHighlightSlot(slot);
    setTimeout(()=>{
      setHighlightSlot(null);
    },700)
  };

  async function saveOutfit() {
    try{
      if (!selectedOutfit.top && !selectedOutfit.bottom && !selectedOutfit.shoes && !selectedOutfit.accessory) {
        toast.error("Please add at least one item.");
        return;
      }
      const outfitData = {
        top: selectedOutfit.top?._id,
        bottom: selectedOutfit.bottom?._id,
        shoes: selectedOutfit.shoes?._id,
        accessory: selectedOutfit.accessory?._id,
      }

      const response = await fetch(`${BASE_URL}/outfits`,{
        method:'post',
        headers:getAuthHeader(),
        body:JSON.stringify(outfitData),
      })
      const result = await response.json();
      if(!response.ok){
        toast.error(result.message);
        return;
      }
      toast.success("Outfit saved successfully!")
    }catch(err){
      console.log(err);
    }
  }

  async function aiSuggestion(){
    setIsStyling(true)
    try{
      if(
        selectedOutfit.top &&
        selectedOutfit.bottom &&
        selectedOutfit.shoes &&
        selectedOutfit.accessory
      ){
        toast.error("Your outfit is already complete");
        setIsStyling(false);
        return;
      }
      
      if (
        !selectedOutfit.top &&
        !selectedOutfit.bottom &&
        !selectedOutfit.shoes &&
        !selectedOutfit.accessory
      ) {
        toast.error("Please add at least one clothing item before using AI Stylist.");
        return;
      }

      const outfitData = {
          top: selectedOutfit.top || null,
          bottom: selectedOutfit.bottom || null,
          shoes: selectedOutfit.shoes || null,
          accessory: selectedOutfit.accessory || null,
      }

      const response = await fetch(`${BASE_URL}/ai/suggest`,{
        method:"POST",
        headers:getAuthHeader(),
        body:JSON.stringify(outfitData)
      })
      const data = await response.json();
      if(!response.ok){
        toast.error(data.message);
        setIsStyling(false);
        return;
      }
      console.log("AI Recommendations:", data);
      setRecommendations(data);
      setTimeout(()=>{
        recommendationsRef.current?.scrollIntoView({
          behavious: "smooth",
          block: "start"
        });
      },100);
      toast.success(`Your Top✨ ${data.length} outfit ideas created!`);
      setIsStyling(false)
    }catch(err){
      console.log(err);
      setIsStyling(false);
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor ,{
      activationConstraint: {
        distance: 8,
      }
    }),
  )


  return (
    <>
      <Navbar />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='mb-8'>
          <h1 className='font-serif text-5xl text-[#2E2621]'>Outfit Builder</h1>
          <p className='text-[#8A8072] mt-2'>Create your next look from your wardrobe</p>
        </div>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          <div className='flex flex-col lg:flex-row gap-10 items-start'>
            <div className='w-full lg:w-[35%]'>
              <h3 className="text-xl font-semibold text-[#2E2621] mb-5">Wardrobe Selection</h3>
              <ClothingPanel columns={2} mobileScroll={true} desktopScroll={true} showAllCategory={false} onSelect={handleMobileSelect} />
            </div>
            <div 
            ref={canvasRef}
            className='w-full lg:flex-1 min-w-0'>
              <h3 className="text-xl font-semibold text-[#2E2621] mb-6">Canvas</h3>
              <div className="space-y-6">
                <div className='grid grid-cols-2 gap-4'>
                  <CanvasSlot
                      icon="👚"
                      ref={topRef}
                      title="Top"
                      selectedItem = {selectedOutfit.top}
                      highlight={highlightSlot === "top"}
                      onRemove={()=>(
                        setSelectedOutfit((prev)=>({
                          ...prev,
                          top:null
                        }))
                      )}
                  />
                  <CanvasSlot
                      icon="👜"
                      ref={accessoryRef}
                      title="Accessory"
                      selectedItem = {selectedOutfit.accessory}
                      highlight={highlightSlot === "accessory"}
                      onRemove={()=>(
                        setSelectedOutfit((prev)=>({
                          ...prev,
                          accessory:null
                        }))
                      )}
                  />
                <CanvasSlot
                    icon="👖"
                    ref={bottomRef}
                    title="Bottom"
                    selectedItem = {selectedOutfit.bottom}
                    highlight={highlightSlot === "bottom"}
                    onRemove={()=>(
                      setSelectedOutfit((prev)=>({
                        ...prev,
                        bottom:null
                      }))
                    )}
                />

                <CanvasSlot
                    icon="👟"
                    ref={shoesRef}
                    title="Shoes"
                    selectedItem = {selectedOutfit.shoes}
                    highlight={highlightSlot === "shoes"}
                    onRemove={()=>(
                      setSelectedOutfit((prev)=>({
                        ...prev,
                        shoes:null
                      }))
                    )}
                />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[180px] flex flex-col gap-5 lg:pt-12'>
              <button className='cursor-pointer w-full py-3 rounded-xl bg-[#2E2621] text-white hover:scale-105 transition-all'
                  onClick={()=>{
                    saveOutfit();
                  }}>Save Outfit</button>
                  <button
                disabled={isStyling}
                className={`cursor-pointer w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2
                ${
                  isStyling
                    ? "bg-gray-300 text-[#2E2621] cursor-not-allowed"
                    : "border border-[#2E2621] bg-[#E7C76A] hover:scale-105"
                }`}
                onClick={aiSuggestion}>
                {isStyling ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Styling...</span>
                  </>
                ) : (
                  "✨ AI Stylist"
                )}
              </button>
              <button className='cursor-pointer w-full py-3 rounded-xl border border-[#DDD5C7] bg-white hover:scale-105 transition-all'
              onClick={()=>{
                setSelectedOutfit({
                  top:null,
                  bottom:null,
                  shoes:null,
                  accessory:null
                })
              }}>Clear</button>
            </div>
          </div>
          </DndContext>
          {recommendations.length > 0 && (
  <div className="mt-12" ref={recommendationsRef}>
    <h2 className="font-serif text-3xl text-[#2E2621] mb-2">
      AI Outfit Ideas
    </h2>

    <p className="text-[#8A8072] mb-6">
      Based on the style and occasion of your selected item
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recommendations.map((recommendation, index) => (
        <div
          key={index}
          className="bg-white border border-[#DDD5C7] rounded-2xl p-5 shadow-sm"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#E7C76A]">
                  #{index + 1} {index === 0 ? "BEST MATCH" : "OUTFIT IDEA"}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#2E2621] mt-3 capitalize">
                {recommendation.style}
              </h3>

              <p className="text-[#8A8072] capitalize">
                Perfect for {recommendation.occasion}
              </p>
            </div>

            <div className="text-right">
            <div className="text-xl font-bold text-[#2E2621]">
              {recommendation.score}
              <span className="text-sm font-normal text-[#8A8072]">/100</span>
            </div>

            <p className="text-[10px] uppercase tracking-wider text-[#8A8072]">
              Match Score
            </p>
          </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
  
            <div>
              <img
                src={recommendation.outfit.top.imageUrl}
                alt={recommendation.outfit.top.name}
                className="w-full h-40 object-contain rounded-xl"
              />
              <p className="text-sm mt-2">
                {recommendation.outfit.top.name}
              </p>
            </div>

            <div>
              <img
                src={recommendation.outfit.bottom.imageUrl}
                alt={recommendation.outfit.bottom.name}
                className="w-full h-40 object-contain rounded-xl"
              />
              <p className="text-sm mt-2">
                {recommendation.outfit.bottom.name}
              </p>
            </div>

            <div>
              <img
                src={recommendation.outfit.shoes.imageUrl}
                alt={recommendation.outfit.shoes.name}
                className="w-full h-40 object-contain rounded-xl"
              />
              <p className="text-sm mt-2">
                {recommendation.outfit.shoes.name}
              </p>
            </div>

            <div>
              <img
                src={recommendation.outfit.accessory.imageUrl}
                alt={recommendation.outfit.accessory.name}
                className="w-full h-40 object-contain rounded-xl"
              />
              <p className="text-sm mt-2">
                {recommendation.outfit.accessory.name}
              </p>
            </div>

          </div>
            <button
              onClick={() => {
                setSelectedOutfit(recommendation.outfit);
                setIsRecommendationApplied(true);

                setTimeout(() => {
                  canvasRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                  });
                }, 100);

                toast.success("Outfit loaded on canvas!");
              }}
              className="mt-5 w-full py-2 rounded-xl bg-[#2E2621] text-white hover:scale-[1.02] transition-all"
            >
              Try This Outfit
            </button>
          </div>
      ))}
    </div>
  </div>
)}
      </main>
    </>
  )
}

export default Canvas