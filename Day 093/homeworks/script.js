// level 93 -homework

// 1) შექმენით ვებსაიტი სადაც გექნებათ h1 თეგში დაწერილი თქვენი სახელი გვარი (უნდა იყოს გაცენტრილი) და ჯავასკრიპტის დახმარებით გააკეთეთ ამ სახელის გარშემო მოძრავი წრე

        // const circle = document.querySelector('.circle');
        // const h1 = document.querySelector('h1');
        // const container = document.querySelector('.container');

        // const radius = 100; // რადიუსი წრის
        // let angle = 0;

        // function moveCircle() {
        //     const x = Math.cos(angle) * radius;
        //     const y = Math.sin(angle) * radius;
            
        //     circle.style.transform = `translate(${x}px, ${y}px)`;
            
        //     angle += 0.02; // მოძრაობის სიჩქარე
            
        //     requestAnimationFrame(moveCircle);
        // }

        // moveCircle();


// 2) მეორე დავალებაში აღარ გაწვალებთ ამიტომ ცენტრშ სახელი გვარი აღარ გინდათ და მხოლოდ გარშემო მოძრავ წრეს დაუმატეთ პულსის ანიმაცია.

        // const circle = document.querySelector('.circle');
        // const radius = 100; // რადიუსი წრის
        // let angle = 0;

        // function moveCircle() {
        //     const x = Math.cos(angle) * radius;
        //     const y = Math.sin(angle) * radius;
            
        //     circle.style.transform = `translate(${x}px, ${y}px) scale(1)`;
            
        //     angle += 0.02; // მოძრაობის სიჩქარე
            
        //     requestAnimationFrame(moveCircle);
        // }

        // moveCircle();


// 3) შექმენით ჰორიზონტალურად მოძრავი ოთკუთხედი რომელიც იმოძრავებს ეკრანის მარჯვენა კედლიდან მარცხენა კედლისკენ და ისევ უკან უსასრულოდ, ასევე გააკეთეთ ისე რომ ეს ოთკუთხედი იცვლიდეს ფერს და ქონდეს პულსის ანიმაცია
 
        // const rectangle = document.querySelector('.rectangle');
        // const screenWidth = window.innerWidth;
        // let direction = 1; // 1 for right, -1 for left
        // let position = 0;

        // function moveRectangle() {
        //     position += direction * 3; // მოძრაობის სიჩქარე

        //     if (position >= screenWidth - 100 || position <= 0) {
        //         direction *= -1; // შეცვლის მიმართულება
        //     }

        //     rectangle.style.left = position + 'px';
        //     requestAnimationFrame(moveRectangle);
        // }

        // moveRectangle();


//  4) გააკეთეთ პატარა შუქნიშანი setInterval-ის დახმარებით

        // const lights = document.querySelectorAll('.light');
        // let currentLight = 0;

        // function changeLight() {
        //     lights.forEach(light => light.classList.remove('active'));
        //     lights[currentLight].classList.add('active');
            
        //     currentLight = (currentLight + 1) % lights.length;
        // }

        // setInterval(changeLight, 2000); // შეცვლის ფერს ყოველ 2 წამში


// 5) გააკეთეთ სოლოლერნი creating animations-ამდე

// done