export const defaultImages = {
  display: {
    url: 'https://images.unsplash.com/photo-1758874960370-af4aeb43fc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBtZW1vcmllcyUyMHRyYWRpdGlvbnN8ZW58MXx8fHwxNzYzMzkyNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Family memories and traditions'
  },
  marquee: {
    url: 'https://images.unsplash.com/photo-1609796574417-09f9675bfd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjMzMzkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
    alt: 'Family traditions'
  }
};

export const sceneConfig = {
  cameraFOV: 5,
  cameraPosition: [0, 0, 100],
  cameraTarget: [-2.90, -0.04, 0], // Default pan/target position for OrbitControls
  itemCount: 6,
  verticalGap: 3.0,
  groupRotation: [-0.4, 0, 0],
  cylinderRadius: 4.0,
  // Camera control settings
  cameraControls: {
    enablePan: true,
    enableZoom: true,
    enableRotate: true,
    maxDistance: 100,
    minDistance: 20,
    panSpeed: 1.0,
    rotateSpeed: 1.0,
    zoomSpeed: 1.0
  }
};