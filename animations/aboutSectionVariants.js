export const staggerVariant = {
  initial: {},

  show: {
    transition: {
        when:'beforeChildren',
      staggerChildren: 1,
    },
  },
};




export const skillBarContainerVariant = {
    initial: {
      opacity: 0,
      y:'100%'
    },
  
    show: {
        opacity:1,
        y:0,
      transition: {
          when:'beforeChildren',
        duration: 1,
      },
    },
  
    
  };
  

export const skillBarVariant = {
  initial: {
    x: '-100%',
  },

  show: {
    x:0,
    transition: {
      duration: 0.5,
    },
  },

  
};
