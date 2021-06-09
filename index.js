function addShadow(option) {
    let img = document.querySelectorAll('.addShadow')

    if (option.shadow_type === 'hard') {
        option.shadow_type = '0px'
    } else {
        option.shadow_type = "15px"
    }

    Image.forEach(image => {
        image.style.boxShadow = `10px 10px ${option.shadow_type} 1px rgba(0,0,0,0.12)`;
        if (option.padding) {
            image.style.padding = '1rem';
        }
    });
}

module.exports.addShadow = addShadow