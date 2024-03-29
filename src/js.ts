import * as _ from 'lodash';
import './stylesheets/style.css';
import KnightFigure from './images/chessKnight.png';
import Star from './images/star.png';

function buildBoard() {
    let body = document.querySelector('body');
    let boardContainer = document.createElement('div');
    boardContainer.setAttribute('class', 'boardContainer');
    //let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    /* svg.setAttribute('height', '800px');
    svg.setAttribute('width', '800px'); */
    let lineContainer = document.createElement('div');
    lineContainer.classList.add('lineContainer');
    body!.appendChild(boardContainer);
    //body!.appendChild(svg);
    body!.appendChild(lineContainer);
    //let boardContainer = document.querySelector('.boardContainer');
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++) {
            let boardSquare = document.createElement('div');
            let id = j + ',' + i;
            boardSquare.classList.add('boardSquare');
            boardSquare.setAttribute('id', id);
            if (i % 2 === 0) {
                j%2===0 ? boardSquare.classList.add('green') : boardSquare.classList.add('tan')
            } else {
                j%2===0 ? boardSquare.classList.add('tan') : boardSquare.classList.add('green')
            }
            boardContainer.appendChild(boardSquare);
            

        }
    }
    //Section for non-console path details
    document.body.appendChild(document.createElement('h1'))
}

class Node{
    pos: Array<number>;
    left2Up1: Node | null;
    left1Up2: Node | null;
    left2Down1: Node | null;
    left1Down2: Node | null;
    right2Up1: Node | null;
    right1Up2: Node | null;
    right2Down1: Node | null;
    right1Down2: Node | null;

    constructor( pos: Array<number>){
        this.pos = pos;
        this.left2Up1 = null;
        this.left1Up2 = null;
        this.left2Down1 = null;
        this.left1Down2 = null;
        this.right2Up1 = null;
        this.right1Up2 = null;
        this.right2Down1 = null;
        this.right1Down2 = null;
    }
}

class Graph {
    visited: Array<string>;
    root: Node | null;
    end: Array<number>;

    constructor(position:Array<number>, end:Array<number>) {
        this.visited = [];
        this.root = this.buildGraph(position, end, []);
        this.end = end;
    }

    buildGraph(start:Array<number>, end:Array<number>, queue:Array<Node>) {
        //First check for valid input
        if (!this.isValid(start, end)) { 
            console.log("Invalid start or end point");
            return null; }
        //Push start onto queue and visited
        let node = new Node(start);
        queue.push(node);
        this.visited.push(node.pos.toString());
        while (queue.length > 0) {
            queue = this.findValidChildren(queue[0], queue[0].pos, end, queue);
            queue = queue.slice(1);
        }
        
        return node;
    }
    
    findValidChildren(node:Node, start:Array<number>, end:Array<number>, queue:Array<Node>) {
        //Attach first child onto start if it's a new board position
        const r1u2 = [start[0] + 1, start[1] + 2];
        if (!this.isValid(r1u2, end) || (this.visited.indexOf(r1u2.toString()) !== -1)) {
            node.right1Up2 = null;
        } else {
            node.right1Up2 = new Node(r1u2);
            //Push first child onto queue and update visited
            queue.push(node.right1Up2);
            this.visited.push(node.right1Up2.pos.toString());
        }
        //And repeat for all potential children
        const r2u1 = [start[0] + 2, start[1] + 1];
        if (!this.isValid(r2u1, end) || (this.visited.indexOf(r2u1.toString()) !== -1)) {
            node.right2Up1 = null;
        } else {
            node.right2Up1 = new Node(r2u1);
            queue.push(node.right2Up1);
            this.visited.push(node.right2Up1.pos.toString());
        }
        const r2d1 = [start[0] + 2, start[1] - 1];
        if (!this.isValid(r2d1, end)|| (this.visited.indexOf(r2d1.toString()) !== -1)) {
            node.right2Down1 = null;
        } else {
            node.right2Down1 = new Node(r2d1);
            queue.push(node.right2Down1);
            this.visited.push(node.right2Down1.pos.toString());
        }
        const r1d2 = [start[0] + 1, start[1] - 2];
        if (!this.isValid(r1d2, end)|| (this.visited.indexOf(r1d2.toString()) !== -1)) {
            node.right1Down2 = null;
        } else {
            node.right1Down2 = new Node(r1d2);
            queue.push(node.right1Down2);
            this.visited.push(node.right1Down2.pos.toString());
        }
        const l2d1 = [start[0] - 2, start[1] - 1];
        if (!this.isValid(l2d1, end)|| (this.visited.indexOf(l2d1.toString()) !== -1)) {
            node.left2Down1 = null;
        } else {
            node.left2Down1 = new Node(l2d1);
            queue.push(node.left2Down1);
            this.visited.push(node.left2Down1.pos.toString());
        }
        const l1d2 = [start[0] - 1, start[1] - 2];
        if (!this.isValid(l1d2, end)|| (this.visited.indexOf(l1d2.toString()) !== -1)) {
            node.left1Down2 = null;
        } else {
            node.left1Down2 = new Node(l1d2);
            queue.push(node.left1Down2);
            this.visited.push(node.left1Down2.pos.toString());
        }
        const l2u1 = [start[0] - 2, start[1] + 1];
        if (!this.isValid(l2u1, end) || (this.visited.indexOf(l2u1.toString()) !== -1)) {
            node.left2Up1 = null;
        } else {
            node.left2Up1 = new Node(l2u1);
            queue.push(node.left2Up1);
            this.visited.push(node.left2Up1.pos.toString());
        }
        const l1u2 = [start[0] - 1, start[1] + 2];
        if (!this.isValid(l1u2, end) || (this.visited.indexOf(l1u2.toString()) !== -1)) {
            node.left1Up2 = null;
        } else {
            node.left1Up2 = new Node(l1u2);
            queue.push(node.left1Up2);
            this.visited.push(node.left1Up2.pos.toString());
        }
        return queue;
    }

    isValid(start:Array<number>, end:Array<number>) {
        return start.length === 2 && end.length === 2 && start[0] <= 7 && start[0] >= 0 && start[1] <= 7 && start[1] >= 0 && end[0] <= 7 && end[0] >= 0 && end[1] <= 7 && end[1] >= 0;
    }

    knightMoves(node:Node | null, end:Array<number>, path:Array<Node>) {
        path.push(node!);
        if (node!.pos.toString() == end.toString()) {
            this.printPath(path);
            return path;
        }
        if (node!.right1Up2 !== null) {
            this.knightMoves(node!.right1Up2, end, path);
        }
        if (node!.right2Up1 !== null) {
            this.knightMoves(node!.right2Up1, end, path);
        }
        if (node!.right2Down1 !== null) {
            this.knightMoves(node!.right2Down1, end, path);
        }
        if (node!.right1Down2 !== null) {
            this.knightMoves(node!.right1Down2, end, path);
        }
        if (node!.left1Down2 !== null) {
            this.knightMoves(node!.left1Down2, end, path);
        }
        if (node!.left2Down1 !== null) {
            this.knightMoves(node!.left2Down1, end, path);
        }
        if (node!.left2Up1 !== null) {
            this.knightMoves(node!.left2Up1, end, path);
        }
        if (node!.left1Up2 !== null) {
            this.knightMoves(node!.left1Up2, end, path);
        }
        path.pop();
        return path;
        
    }

    printPath(path:Array<Node>) {
        //For the Console
        let printout = "Path found! ";
        for (let i = 0; i < path.length;i++) {
            printout += '[' + path[i].pos + '] -> ';
        }
        printout += (path.length-1) + ' moves';
        console.log(printout);
        //For Non-console reading
        document.querySelector('h1')!.textContent = printout;
        let p = document.createElement('p');
        p.textContent = "Refresh the page to see a new path";
        document.querySelector('h1')!.appendChild(p);
        
        //For the visual
        //Place start and end points
        let startSquare = document.getElementById(path[0]!.pos.toString())!;
        let endSquare = document.getElementById(path.at(-1)!.pos.toString())!;
        let pic = document.createElement('img');
        let star = document.createElement('img');
        pic.setAttribute('src', KnightFigure);//'./images/chessKnight.png');
        star.setAttribute('src', Star);//'./images/star.png');
        startSquare!.appendChild(pic);
        endSquare!.appendChild(star);
        //Draw Connecting lines
        //let svg = document.querySelector('svg')!;
        let lineContainer = document.querySelector('.lineContainer');
        for (let i = 0; i < path.length - 1; i++){
            //Find Center of Square Divs
            let init = document.getElementById(path.at(i)!.pos.toString())!;
            let initCentX = init.offsetLeft + init.offsetWidth / 2;
            let initCentY = init.offsetTop + init.offsetHeight / 2;
            //let next = document.getElementById(path.at(i+1).pos);
            //let nextCentX = next.offsetLeft + next.offsetWidth / 2;
            //let nextCentY = next.offsetTop + next.offsetHeight / 2;
            //Draw the line between centers
            /* let line = document.createElementNS('http://www.w3.org/2000/svg','line');
            line.setAttribute('x1', initCentX);
            line.setAttribute('y1', initCentY);
            line.setAttribute('x2', nextCentX);
            line.setAttribute('y2', nextCentY); */
            /* let classToAdd = 'line' + i; */
            let line = document.createElement('div');
            line.classList.add('line');
            line.style.transform += 'translateX('+(initCentX)+'px)';
            line.style.transform += 'translateY('+initCentY+'px)';
            if(path[i].pos[1]>path[i+1].pos[1]){
                //Negetive Degrees
                switch (path[i].pos[0]-path[i+1].pos[0]){
                    case -1:
                        line.style.transform += 'rotate(-63deg)';
                        break;
                    case -2:
                        line.style.transform += 'rotate(-27deg)';
                        break;
                    case 1:
                        line.style.transform += 'rotate(-115deg)';
                        break;
                    case 2:
                        line.style.transform += 'rotate(-155deg)';
                        break;
                    default:
                        console.log("Error in Negetive Degrees");    
                }
            } else {
                //Positive Degrees
                switch (path[i].pos[0]-path[i+1].pos[0]){
                    case -1:
                        line.style.transform += 'rotate(63deg)';
                        break;
                    case -2:
                        line.style.transform += 'rotate(27deg)';
                        break;
                    case 1:
                        line.style.transform += 'rotate(115deg)';
                        break;
                    case 2:
                        line.style.transform += 'rotate(155deg)';
                        break;
                    default:
                        console.log("Error in Positive Degrees");    
                }
            }
            //line.style.transform = 'rotate(30deg)';
            /* line.setAttribute('left', initCentY+'px');
            line.setAttribute('bottom', nextCentX+'px');
            line.setAttribute('right', nextCentY+'px'); */
            //svg?.appendChild(line);
            lineContainer?.appendChild(line);
        }
        //document.querySelector('body')!.appendChild(svg);
    }

}



buildBoard();
//Hard-coded coordinates for testing routes
//const knight = new Graph([0, 0], [3, 3]);
//const knight2 = new Graph([3, 3], [4, 3]);
//knight2.knightMoves(knight2.root, [4, 3], []);

//Knight is random coordinates on refresh
const knight = new Graph([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)], [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]);

knight.knightMoves(knight.root, knight.end, []);

