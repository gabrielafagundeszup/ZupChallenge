export const colors = {
    blues: {
      medium: '#0EA5B9',
      dark: '#0F6178',
      darkest: '#04252B',
    },
    yellow: {
      light: '#FDEAB6',
      medium: '#FDD773',
      dark: '#FEBC15',
    },
    neutral: {
      lightest: '#FFFFFF',
      light: '#F0F2F7',
      medium: '#D4D7DE',
      gray: '#9B9B9B',
      dark: '#5F646D',
      black: '#4A4A4A',
      darkest: '#000000',
    }
  }
  
  export const form = {
    labelOffset: '40px',
    paddingTop: '12px',
  }
  
  const theme = {
    body: {
      marginLeft: '150px',
      marginRight: '150px',
    },
    spacing:{
      size4: '4px',
      size8: '8px',
      size16: '16px',
      size24: '24px',
      size32: '32px',
      size48: '48px',
      size64: '64px',
      size96: '96px',
      size128: '128px'
    },
    palette: colors,
    typography: {
      families: {
        text: 'Quicksand',
        title: 'Staatliches',
      },
      size: {
        XXXS: '12px',
        XXS: '16px',
        XS: '20px',
        SM: '24px',
        MD: '28px',
        LG: '32px',
        XL: '36px',
        XXL: '48px',
        XXXL: '64px',
        UL: '80px',
      },
      weights: {
        boldest: 900,
        bold: 700,
        medium: 500,
        regular: 300,
      },
    },
    shadows: [
      '0px 2px 4px 0px rgba(100, 109, 130, 0.14), 0px 0px 1px 0px rgba(100, 109, 130, 0.1)',
      '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 3px 1px 0px rgba(0, 0, 0, 0.14)',
      '0px 9px 11px -8px rgba(229, 236, 237, 1)',
      '0px 1px 5px 0px rgba(150, 150, 150, 0.12), 0px 5px 17px 0px rgba(0,0,0,0.14)',
    ],
    shape: {
      borderRadius: ['5px', '10px', '20px', '40px', '50%'],
    },
    zIndex: {
      navigation: 1,
      obfuscator: 1,
      min: -1000,
      modal: 101,
    },
    form,
  }
  
  export default theme
  