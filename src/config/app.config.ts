export default () => {
  return {
    port: process.env.PORT || 3000,
    address: process.env.ADDRESS || '0.0.0.0',
    environment: process.env.NODE_ENV || 'development',
    is_dev: process.env.NODE_ENV === 'development',
    api_prefix: 'api'
  };
};
