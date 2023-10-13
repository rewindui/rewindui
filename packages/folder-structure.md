## Folder Structure for Common React Components

    ├── ...
    ├── packages/
    │   ├── core/                                                 # Common Components
    │   │   ├── src/                                              # Top level src structure
    │   │   │   ├── animations/                                   # Animations    
    │   │   │   │    ├── ...                              
    │   │   │   │    ├── use-fade-hook.tsx                            
    │   │   │   │    └── index.ts
    │   │   │   ├── components/                                   # common components directory
    │   │   │   │    ├── Button/                                    
    │   │   │   │    │   ├── Button.test.tsx                      # Test file
    │   │   │   │    │   ├── Button.tsx                           # Component
    │   │   │   │    │   ├── Button.types.ts                      # Types / interfaces (models) used in the component
    │   │   │   │    │   └── index.ts 
    │   │   │   │    └── ...             
    │   │   │   ├── hooks/                                        # Hooks    
    │   │   │   │    ├── use-keypress.ts
    │   │   │   │    └── ... 
    │   │   │   ├── icons/                                        # Icons (SVG elements)  
    │   │   │   │    ├── ChevronDown.tsx
    │   │   │   │    ├── Eye.tsx 
    │   │   │   │    ├── EyeSlash.tsx      
    │   │   │   │    └── ... 
    │   │   │   └── theme/                                               
    │   │   │        ├── styles/                                  # Styles (tailwind classes) of components
    │   │   │        │   ├── ...                     
    │   │   │        │   ├── Button.styles.ts                       
    │   │   │        │   └── index.ts
    │   │   │        ├── variants/                                # Variants of the components
    │   │   │        │   ├── ...
    │   │   │        │   ├── Button.variants.ts                                           
    │   │   │        │   └── index.ts
    │   │   │        ├── theme.context.tsx 
    │   │   │        ├── variant.context.tsx 
    │   │   │        └── index.ts        
    │   │   ├── index.ts 
    │   │   ├── package.json 
    │   │   ├── rollup.config.mjs
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.rollup.json
    │   │   ├── vitest.config.ts 
    │   │   └── ...  
    │   │                                         
    │   ├── models/                                              # Common models (types)
    │   │   ├── src/                                             # Top level src structure  
    │   │   │   ├── headers.type.ts                              # API headers type  
    │   │   │   ├── ...
    │   │   │   └── index.ts 
    │   │   ├── package.json 
    │   │   ├── tsconfig.json
    │   │   └── ...    
    │   │                                           
    │   └── utils/                                               # Utility functions
    │       ├── src/                                             # Top level src structure  
    │       │   ├── api-connector/                               # API Connector
    │       │   │   ├── api-connector.ts 
    │       │   │   └── helpers/ 
    │       │   │       ├── crypto-encryption.ts
    │       │   │       ├── encrypt-aes-key.ts
    │       │   │       ├── generate-aes-key.ts
    │       │   │       ├── decrypt-payload.ts
    │       │   │       └── encrypt-payload.ts                            
    │       │   ├── ...
    │       │   └── index.ts 
    │       ├── package.json 
    │       ├── tsconfig.json
    │       └── ...    
    │   
    ├── package.json
    ├── README.md 
    ├── turbo.json 
    └── ...
