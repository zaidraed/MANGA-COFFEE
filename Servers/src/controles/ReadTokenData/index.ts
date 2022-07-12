import config from '../../config/config';
import jwt from 'jsonwebtoken';

const ReadTokenData = (authorization: any) => {
    const header: any = authorization.split(' ');
    let token = header[1];

    let data: any;
    jwt.verify(token, config.jwtsecret, (err: any, decoded: any) => {
        if(err) {
            console.log('Error al obtener data del token');
        } else {
            data = decoded;
        }
    });

    return data;
}

export default ReadTokenData;