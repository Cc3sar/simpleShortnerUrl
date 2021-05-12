const verifyUrl = (req, res, next) => {
    const checkUrl = req.body.url.split(".");

    console.log(checkUrl);
    
    if(checkUrl[0] !== "http://www" && checkUrl[2] !== "com") {
        return res.json({ error: 'invalid url' })
    };

    next();
};

export default verifyUrl;