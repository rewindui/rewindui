## Folder Structure for Common React Components

    
    .(packages/core)
    ├── ...
    ├── src/                                              # Top level src structure
    │   ├── animations/                                   # Animations    
    │       ├── ...                              
    │       ├── use-fade-hook.tsx                            
    │       └── index.ts
    │   ├── components/                                   # common components directory
    │       ├── Button/                                    
    │           ├── Button.test.tsx                       # Test file
    │           ├── Button.tsx                            # Component
    │           ├── Button.types.ts                       # Types / interfaces (models) used in the component
    │           └── index.ts             
    │   ├── helpers/                                      # Helpers        
    │       ├── ...
    │       └── index.ts  
    │   ├── hooks/                                        # Hooks   
    │       ├── ...     
    │       └── index.ts  
    │   ├── icons/                                        # Icons / images   
    │       ├── ...     
    │       └── index.ts  
    │   ├── theme/                                               
    │       ├── styles/                                   # Styles (tailwind classes) of components
    │           ├── ...                     
    │           ├── Button.styles.ts                       
    │           └── index.ts
    │       ├── variants/                                 # Variants of the components
    │           ├── ...                                           
    │           └── index.ts
    │       ├── theme.context.tsx 
    │       ├── variant.context.tsx 
    │       └── index.ts  
    │   ├── types/                                        # Generic types       
    │       ├── ... 
    │       └── index.ts  
    │   ├── utils/                                        # Utility functions      
    │       ├── ...  
    │       └── index.ts        
    ├── index.ts 
    └── ...                                               # Other config files (Testing and tailwind)
