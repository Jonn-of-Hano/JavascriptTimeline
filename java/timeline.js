

version1.addEventListener('click', function () {

    timelineInformation.classList.remove('unselectedInfo')
    timelineInformation.classList.add('selectedInfo')

    version1.classList.add('timelineButtonSelected')
    version2.classList.remove('timelineButtonSelected')
    version3.classList.remove('timelineButtonSelected')
    version4.classList.remove('timelineButtonSelected')
    
    timelineImage.src="central_assets/v1.png";
    timelineTitle.innerHTML = 'New Beginning'
    timelineSubtitle.innerHTML = 'Early February 2024 - Mid March 2024'
    timelineParagraph.innerHTML = 'The birth of Calamity farm. Prior to the name Shatterfarms the game was called Calamity farm. Not much is known but the developer had the least amount of experience with gamedevelopment coming off of Fumo Shooter.'
});

version2.addEventListener('click', function () {

    timelineInformation.classList.remove('unselectedInfo')
    timelineInformation.classList.add('selectedInfo')

    version1.classList.remove('timelineButtonSelected')
    version2.classList.add('timelineButtonSelected')
    version3.classList.remove('timelineButtonSelected')
    version4.classList.remove('timelineButtonSelected')

    timelineImage.src="central_assets/v2.png";
    timelineTitle.innerHTML = 'Birth of Concepts'
    timelineSubtitle.innerHTML = 'Mid March 2024 - Early May 2024'
    timelineParagraph.innerHTML = 'Still named Calamity Farm, this version was where all the major concepts that are now highly fleshed out was born. For example the Scythe, and the noise textured art style, However 90% of it was all jank.'
});

version3.addEventListener('click', function () {
    
    timelineInformation.classList.remove('unselectedInfo')
    timelineInformation.classList.add('selectedInfo')
    
    version1.classList.remove('timelineButtonSelected')
    version2.classList.remove('timelineButtonSelected')
    version3.classList.add('timelineButtonSelected')
    version4.classList.remove('timelineButtonSelected')

    timelineImage.src="central_assets/v3.png";
    timelineTitle.innerHTML = 'The Void Period.'
    timelineSubtitle.innerHTML = 'Late May 2024 - Early September 2024'
    timelineParagraph.innerHTML = 'Now Shatterfarms is in full ideation, The item system, farming and general gameplay loop were though of, however there was still so much confusing when it comes to the scope of the game. Hanoder struggled with this one.'
});

version4.addEventListener('click', function () {

    timelineInformation.classList.remove('unselectedInfo')
    timelineInformation.classList.add('selectedInfo')

    version1.classList.remove('timelineButtonSelected')
    version2.classList.remove('timelineButtonSelected')
    version3.classList.remove('timelineButtonSelected')
    version4.classList.add('timelineButtonSelected')

    timelineImage.src="central_assets/v4.png";
    timelineTitle.innerHTML = 'Enlightenment'
    timelineSubtitle.innerHTML = 'Late September 2024 - Early October 2024'
    timelineParagraph.innerHTML = 'Through the learning period, Shatterfarms reached full mastery for the devleoper, while code cleanliness was sacrificed, it was revolutionary for the gameplay, content and gamefeel. However the cleanliness slowly caught up. And now we are in the newest version of Shatterfarms!'
});