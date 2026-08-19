export const theme = {
  colors: {
    // Backgrounds
    bg: {
      primary: '#F8F9FE',    // Fondo claro principal (como la imagen)
      secondary: '#FFFFFF',  // Cards blancas
      tertiary: '#F0F0F5',
      elevated: '#FFFFFF',
    },
    // Nuevos colores con personalidad (Basados en tu imagen)
    brand: {
      purple: '#B5A8FF',     // Tarjeta principal
      orange: '#FFC875',     // Tarjeta secundaria (Yoga)
      blue: '#AECBFA',       // Tarjeta terciaria (Balance)
      mint: '#B9F3E4',       // Etiquetas o success
      dark: '#1C1C1E',       // Botones y tab bar flotante
    },
    // Semantic
    semantic: {
      success: '#00D68F',
      warning: '#FFAA00',
      error: '#FF3D71',
      info: '#0095FF',
    },
    // Macros
    macros: {
      protein: '#FF6B6B',
      carbs: '#4ECDC4',
      fat: '#FFE66D',
      calories: '#1C1C1E',
    },
    // Text
    text: {
      primary: '#1C1C1E',    // Texto oscuro casi negro
      secondary: '#8E8E93',  // Gris para subtítulos
      inverse: '#FFFFFF',    // Texto blanco sobre fondos oscuros
    },
  },
  spacing: {
    xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48,
  },
  borderRadius: {
    sm: 12, md: 16, lg: 24, xl: 32, full: 9999, // Bordes mucho más redondeados
  },
};
