import React, { useState } from 'react';
import { KineticScene } from './components/webgl/KineticScene';
import { ImageUploadOverlay } from './components/ui/ImageUploadOverlay';
import { CameraConfigOverlay } from './components/ui/CameraConfigOverlay';
import { ControlPanel } from './components/ui/ControlPanel';
import { useTextureManager } from './hooks/useTextureManager';

export default function App() {
  const {
    displayState,
    marqueeState,
    animationSpeeds,
    updateDisplayImage,
    updateMarqueeImage,
    resetToDefaults,
    updateAnimationSpeed
  } = useTextureManager();
  
  const [cameraInfo, setCameraInfo] = useState(null);
  
  return (
    <div className="h-screen w-full relative" style={{ backgroundColor: 'transparent' }}>
      
      {/* App Title */}
      <div className="absolute top-6 left-0 right-0 z-40 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-lg px-4 py-0">
            <div className="flex items-center">
              <div>
                <img 
                  src="https://i.ibb.co/1YjKzFBm/rotor.png"
                  alt="Rotor"
                  style={{ width: '175px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Upload Overlay */}
      <ImageUploadOverlay
        displayImage={displayState.image}
        marqueeImage={marqueeState.image}
        onDisplayImageChange={updateDisplayImage}
        onMarqueeImageChange={updateMarqueeImage}
        onResetToDefaults={resetToDefaults}
        isLoading={displayState.isLoading || marqueeState.isLoading}
        className="absolute top-30 left-4 z-40 w-60"
      />
      
      {/* Camera Config Overlay */}
      <CameraConfigOverlay 
        cameraInfo={cameraInfo}
        className="absolute bottom-16 left-4 z-40 w-60"
      />
      
      {/* Main 3D Scene */}
      <KineticScene
        displayTexture={displayState.texture}
        displayDimensions={displayState.dimensions}
        isDisplayLoading={displayState.isLoading}
        marqueeTexture={marqueeState.texture}
        isMarqueeLoading={marqueeState.isLoading}
        animationSpeed={animationSpeeds}
        onCameraUpdate={setCameraInfo}
      />
      
      {/* Loading Overlay */}
      {(displayState.isLoading || marqueeState.isLoading) && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-40">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <span>Loading textures...</span>
          </div>
        </div>
      )}
      
      {/* Floating Control Panel */}
      <ControlPanel
        onResetToDefaults={resetToDefaults}
        animationSpeeds={animationSpeeds}
        onAnimationSpeedChange={updateAnimationSpeed}
        isLoading={displayState.isLoading || marqueeState.isLoading}
        cameraInfo={cameraInfo}
      />
    </div>
  );
}