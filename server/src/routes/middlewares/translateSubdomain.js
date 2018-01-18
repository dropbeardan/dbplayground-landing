const translateSubdomain = (req, res, next) => {

    let subdomains = [
        { prefix: 'apiserver.dbplayground.com', route: '/api/mock-api-server' }
    ];

    let route = subdomains.find((subdomain) => {
        return (
            (req.headers.referrer && req.headers.referrer.indexOf(subdomain) !== -1) ||
            (req.headers.origin && req.headers.origin.indexOf(subdomain) !== -1) ||
            (req.headers.host && req.headers.host.indexOf(subdomain) !== -1)
        );
    });

    if (route) {
        req.path = `${route}${req.path}`;
    }

    next();
};

module.exports = translateSubdomain;