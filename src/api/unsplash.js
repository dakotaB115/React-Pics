import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6ebdd2780932fcd180be8aeb5d8fff411e918c8f52c105b6e88af846f51d2dd6'
  }
});
