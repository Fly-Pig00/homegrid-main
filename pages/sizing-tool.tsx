import React, {useEffect} from 'react'

const SizingTool = () => {
    useEffect(() => {
        const date = new Date() as any;
        var widgetOptions370611 = { bg_color: "transparent" }; 
        (function() { 
          var a = document.createElement("script"), h = "head"; a.async = true; 
          a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=370611&t="+Math.floor(date/18e5); 
          document.getElementsByTagName(h)[0].appendChild(a) 
        })();
    },[])
  return (
    <div className='py-20 max-w-xs sm:max-w-xl mx-auto'>
      <div className="uCalc_370611 mb-20"></div>
      <p>
      Our battery sizing tool is meant to provide a general guideline for home-battery sizing based on a single month of electricity usage. We recommend using the month out of the last year with the highest usage. This tool assumes that the battery will be paired with an existing or future solar array sized to at least 85% offset and that the solar will be producing on a daily basis. 
      </p>
      <br/>
      <p><strong>Off-grid:</strong> Provides full electrical coverage for your home more than 95% of the year.</p>
      <br/>
      <p><strong>Partial Offset:</strong> Provides significant daily savings. Discharges electricity when solar stops producing. Also provides backup in the event of an emergency.</p>
      <br/>
      <p><strong>Emergency Backup:</strong> Allows for small amount of daily savings. Provides small amount of home backup in the event of an emergency.</p>
    </div>
  )
}

export default SizingTool