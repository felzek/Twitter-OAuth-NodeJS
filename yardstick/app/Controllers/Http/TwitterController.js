'use strict'

const axios =require('axios');
const Env = use('Env');

class TwitterController {
    async TwitterTest({request,response,session}){
        const url = `https://api.twitter.com/1.1/users/lookup.json?screen_name=ThumbTalkin&consumer_key=${Env.get('TWITTER_CONSUMER_KEY')}&consumer_secret=${Env.get('TWITTER_CONSUMER_SECRET')}&access_token_key=4310668813-IwYHz0BaZ2l9EvDrnsnJouH71ZaClhajKYkf9TY&access_token_secret=XJsFyx24vStqsBfKOgrRMmVMeBVLu04urxhi5Ppz7qDts`    
        
        try{
            const td = await axios.get(url);
            console.log(td);
            if (td.data.data.length > 0) {
                response.json({ success: true, user: td.data.data[0] });
            } else {
                response.json({ success: false });
            }   
        } catch (err) {
            console.log(err);
            response.json({ success: false });
        }
    }


}

module.exports = TwitterController
