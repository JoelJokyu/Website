import React from 'react'
import GlitchText from '@/animations/GlitchText';

const Describeme:React.FC = () => {
  return (
    <div>
      <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Electrical and Computer Engineer
          </GlitchText>
    </div>
  )
}

export default Describeme
