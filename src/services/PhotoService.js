export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                alt: 'Ukeleles',
            },
            {
                itemImageSrc: 'https://images.pexels.com/photos/4430936/pexels-photo-4430936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                alt: 'Amplificador',
            },
            {   
                itemImageSrc: 'https://images.pexels.com/photos/860662/pexels-photo-860662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                alt: 'Piano de cola',
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};