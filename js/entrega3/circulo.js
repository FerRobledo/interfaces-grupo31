export class Circulo {
    constructor(posX, posY, radio, fill, context) {
        this.posX = posX;
        this.posY = posY;
        this.radio = radio;
        this.fill = fill;
        this.context = context;
        this.image = null; // Nuevo atributo para almacenar la imagen
    }

    draw() {
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();

        // Dibujar la imagen de borde si existe
        if (this.image) {
            this.context.save();
            this.context.closePath();
            this.context.clip(); // Recortar la imagen en forma de círculo
            this.context.drawImage(this.image, this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);
            this.context.restore();
        }
    }

    setFill(fill) {
        this.fill = fill;
    }

    setImage(image) {
        this.image = image; // Método para establecer la imagen
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getRadio() {
        return this.radio;
    }

    getFill() {
        return this.fill;
    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}