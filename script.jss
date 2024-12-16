window.onload = function () {
    let legoHeart = document.getElementById('legoHeart');
    let bob = document.getElementById('bob');
    
    // Simulate Lego heart building step by step
    let heartSteps = ['lego-heart-step1.png', 'lego-heart-step2.png', 'lego-heart-step3.png', 'lego-heart-step4.png', 'lego-heart-step5.png'];
    
    let step = 0;

    // Change the heart image on intervals (simulate Lego bricks being added)
    let heartInterval = setInterval(function () {
        if (step < heartSteps.length) {
            legoHeart.src = heartSteps[step];
            step++;
        } else {
            clearInterval(heartInterval);
        }
    }, 1000);  // Change the heart every 1 second (can adjust speed)

    // Bob's movements (optional to control Bob's appearance more specifically)
    bob.style.animationDelay = '1s'; // Delay Bob's animation to start after a short time
};
