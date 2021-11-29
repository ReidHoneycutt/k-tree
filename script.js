let W = window.innerWidth;
let H = window.innerHeight;

let K;

function setup() {
    createCanvas(W, H);
    background(0);

    K = new Node(W/2, H/2, 0);
}

function mousePressed() {
    K.branch();
}

function draw() {
    background(0);
    K.show();
}