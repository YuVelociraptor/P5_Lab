let cnt = 0;

const sketch001 = function (p) {

    const width = 400;
    const height = 400;
    p.setup = function () {
        p.createCanvas(width, height);
    };

    p.draw = function () {
        p.background(255, 255, 0);
        p.ellipse(10, 10, 10, 10)
    };

    p.mouseClicked = function () {
        if(p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height) {
            cnt++;
        }
    };
};

const sketch002 = function (p) {
    const width = 500;
    const height = 500;

    p.setup = function () {
        p.createCanvas(width, height);
    };

    p.draw = function () {
        p.background(255, 0, 255);
        p.ellipse(10, 10, 10, 10);
        p.text(cnt.toString(), 40, 40);
    };

    p.mouseClicked = function () {
        if(p.mouseX > 0 && p.mouseX < width && p.mouseY > 0 && p.mouseY < height) {
            cnt--;
        }
    };
};

new p5(sketch001, 'canvas001');
new p5(sketch002, 'canvas002');