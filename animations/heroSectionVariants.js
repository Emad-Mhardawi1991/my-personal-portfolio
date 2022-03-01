export const staggerVariant = {
    initial: {},
  
    show: {
      transition: {
     
        staggerChildren: 0.1,
       
      },
    },
    hover: {},
  };
  
  export const textVariant = {
    initial: {
      opacity: 0,
      scale: 0,
    },
  
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  
    hover: {
      color: "#45C4B0",
      scaleY: 0.8,
      scaleX: 1.2,
      transition: {
        type: "spring",
      },
    },
  };
  
  
  export const buttonVariant = {
    initial: {
      opacity: 0,
      y:'100%'
    },
  
    show: {
        opacity: 1,
        y:'0',
      transition: {
       duration:1
      },
    },
  };
  
  