function getTargetUrl(tag) {
    return {
        'craftInformatikAmGymnasium': 'https://craft.silasberger.ch/isO6kByCgVG8K8'
    }[tag]
}

function forward() {
    const subdomain = window.location.hostname.split('.')[0];

    if (subdomain === 'teach') {
        window.location.replace(getTargetUrl('craftInformatikAmGymnasium'))
    }
}

forward();