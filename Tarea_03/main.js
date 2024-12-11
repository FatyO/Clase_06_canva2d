window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
 
    const CONFIG = {
        MAIN_CIRCLE_RADIUS: 250,
        CIRCLE_MIN_RADIUS: 10,
        CIRCLE_MAX_RADIUS: 30,
        GROWTH_SPEED: 0.1,
        CIRCLE_COUNT: 10,
        CIRCLE_COLOR: "rgba(0, 150, 255, 0.5)",
        STROKE_WIDTH: 3
    };
 
    let circles = [];
 
    function createCircles() {
        for (let i = 0; i < CONFIG.CIRCLE_COUNT; i++) {
            let radius = Math.random() * 
                (CONFIG.CIRCLE_MAX_RADIUS - CONFIG.CIRCLE_MIN_RADIUS) + 
                CONFIG.CIRCLE_MIN_RADIUS;
            
            let angle = Math.random() * Math.PI * 2;
            let distance = Math.random() * (CONFIG.MAIN_CIRCLE_RADIUS - radius);
 
            circles.push({
                radius: radius,
                x: centerX + Math.cos(angle) * distance,
                y: centerY + Math.sin(angle) * distance,
                speed: (Math.random() * 2 - 1) * 0.01,
                growing: Math.random() > 0.5,
                angle: angle,
                distance: distance
            });
        }
    }
 
    function updateCircle(circle) {
        if (circle.distance + circle.radius > CONFIG.MAIN_CIRCLE_RADIUS) {
            circle.growing = false;
        } else if (circle.distance - circle.radius < 0) {
            circle.growing = true;
        }
 
        circle.radius += (circle.growing ? 1 : -1) * CONFIG.GROWTH_SPEED;
        circle.radius = Math.max(circle.radius, CONFIG.CIRCLE_MIN_RADIUS);
 
        circle.angle += circle.speed;
        circle.x = centerX + Math.cos(circle.angle) * circle.distance;
        circle.y = centerY + Math.sin(circle.angle) * circle.distance;
    }
 
    function drawMainCircle() {
        ctx.beginPath();
        ctx.arc(centerX, centerY, CONFIG.MAIN_CIRCLE_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = CONFIG.CIRCLE_COLOR;
        ctx.lineWidth = CONFIG.STROKE_WIDTH;
        ctx.stroke();
    }
 
    function drawCircle(circle) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.CIRCLE_COLOR;
        ctx.fill();
        ctx.stroke();
    }
 
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMainCircle();
        circles.forEach(circle => {
            updateCircle(circle);
            drawCircle(circle);
        });
        requestAnimationFrame(animate);
    }
 
    createCircles();
    animate();
 
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
        createCircles();
    });
 };