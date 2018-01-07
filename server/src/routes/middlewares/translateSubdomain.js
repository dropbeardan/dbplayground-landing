const translateSubdomain = (req, res, next) => {

    let subdomains = [
        { prefix: 'apiserver.dbplayground.com', route: '/api/mock-api-server' }
    ];

    let route = subdomains.find((subdomain) => {
        return req.headers.host.indexOf(subdomain) !== -1;
    });

    if (route) {
        req.path = `${route}${req.path}`;
    }

    next();
};

module.exports = translateSubdomain;