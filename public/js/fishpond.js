const canvas = document.getElementById('pond');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Fish {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 10 + Math.random() * 10;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.angle = 0;
        this.tailAngle = 0;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.x -= dx / distance * 3;
          this.y -= dy / distance * 3;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.angle = Math.atan2(this.speedY, this.speedX);
        this.tailAngle += 0.2;

        if (Math.random() < 0.01) {
          bubbles.push(new Bubble(this.x, this.y));
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(-this.size, 0);
        ctx.lineTo(-this.size - 10, Math.sin(this.tailAngle) * 5);
        ctx.lineTo(-this.size - 10, Math.sin(this.tailAngle) * -5);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        ctx.restore();
      }
    }

    class Bubble {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 4 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = 1;
      }

      update() {
        this.y -= this.speed;
        this.opacity -= 0.005;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    const fishes = [];
    const bubbles = [];
    const waveLines = [];

    for (let i = 0; i < 40; i++) {
      fishes.push(new Fish());
    }

    const waveCount = 3;
    for (let i = 0; i < waveCount; i++) {
      waveLines.push({
        amplitude: 10 + i * 5,
        wavelength: 200 + i * 50,
        speed: 0.3 + i * 0.1,
        phase: Math.random() * Math.PI * 2
      });
    }

    function drawBackground() {
      let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#FFDEE9'); // Light pink
      gradient.addColorStop(0.5, '#B5FFFC'); // Soft aqua
      gradient.addColorStop(1, '#0080FF'); // Deep blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawWaves() {
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = '#87CEEB'; // Light sky blue

      for (let wave of waveLines) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          let y = Math.sin((x + wave.phase) / wave.wavelength * 2 * Math.PI) * wave.amplitude + canvas.height / 2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
        wave.phase += wave.speed;
      }

      ctx.restore();
    }

    function animate() {
      drawBackground(); // Sunset gradient
      drawWaves(); // Moving waves

      fishes.forEach(fish => {
        fish.update();
        fish.draw();
      });

      bubbles.forEach((bubble, index) => {
        bubble.update();
        bubble.draw();
        if (bubble.opacity <= 0) {
          bubbles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();