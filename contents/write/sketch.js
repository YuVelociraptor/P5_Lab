let answer = '';

const sketch001 = function (p) {

    const width = 400;
    const height = 400;
    p.setup = function () {
        p.createCanvas(width, height);
    };

    p.draw = function () {
        p.background(255, 255, 0);
        p.textSize(32);
        p.text(answer, 10, 30);
    };

    p.mouseClicked = function () {
        if(p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height) {

        }
    };
};

const sketch002 = function (p) {
    const width = 300;
    const height = 300;

    p.setup = function () {
        p.createCanvas(width, height);
        p.background(255, 255, 255);
    };

    p.draw = function () {
        if (p.mouseIsPressed) {
            p.stroke(0);
            p.strokeWeight(4);
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
    };

    p.mouseClicked = function () {
        if(p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height) {

        }
    };
};

const sketch003 = function (p) {
    const width = 300;
    const height = 300;


    p.setup = function () {
        p.createCanvas(width, height);
        p.background(255, 255, 255);
    };

    p.draw = function () {
        p.rect(30, 20, 55, 40);
    };

    p.mouseClicked = function () {
        if(p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height) {
            const canvasElement = document.querySelector('canvas');
            const dataURL = canvasElement.toDataURL('image/png');

            Tesseract.recognize(
                dataURL,
                'eng',
                {
                    //logger: (m) => console.log(m),
                }
            ).then(({ data: { text } }) => {
                //answer = text;
                console.log(text);
            });

            answer = 'aaaa';
        }
    };

}

new p5(sketch001, 'canvas001');
new p5(sketch002, 'canvas002');
new p5(sketch003, 'canvas003');
