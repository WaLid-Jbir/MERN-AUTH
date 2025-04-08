import swaggerJSDoc from "swagger-jsdoc";


const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN_AUTH Endpoints',
      version: '1.0.0',
      description: 'Authentication API documentation for MERN_AUTH project',
    },
    servers: [
      {
        url: 'http://localhost:5001/api/auth',
      },
    ],
  },
  apis: [
    './routes/*.js'
  ],
});

export default swaggerSpec;