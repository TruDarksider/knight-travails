function buildBoard() {
    let boardContainer = document.querySelector('.boardContainer');
    for (let i = 0; i < 64; i++){
        let boardSquare = document.createElement('div');
        boardSquare.classList.add('boardSquare');
        boardContainer.appendChild(boardSquare);
    }
}

class Node {
    constructor(pos){
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
    constructor(position, end) {
        this.visited = [];
        this.root = this.buildGraph(position, end, []);
        this.end = end;
    }

    buildGraph(start, end, queue) {
        //First check for valid input
        if (!this.isValid(start, end)) { return 'Invalid start or end point'; }
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
    
    findValidChildren(node, start, end, queue) {
        //Attach first child onto start if it's a new board position
        const r1u2 = [start[0] + 1, start[1] + 2];
        if (!this.isValid(r1u2, end) || (this.visited.indexOf(r1u2.toString()) !== -1)) {
            node.right1Up2 = null;
        } else {
            node.right1Up2 = new Node(r1u2);
            //Push first child onto queue and update visited
            queue.push(node.right1Up2);
            this.visited.push(node.right1Up2.pos.toString());
            //console.log("Added " + node.right1Up2.pos + " to Q");
        }
        //And repeat for all potential children
        const r2u1 = [start[0] + 2, start[1] + 1];
        if (!this.isValid(r2u1, end) || (this.visited.indexOf(r2u1.toString()) !== -1)) {
            node.right2Up1 = null;
        } else {
            node.right2Up1 = new Node(r2u1);
            queue.push(node.right2Up1);
            this.visited.push(node.right2Up1.pos.toString());
           // console.log("Added " + node.right2Up1.pos + " to Q");
        }
        const r2d1 = [start[0] + 2, start[1] - 1];
        if (!this.isValid(r2d1, end)|| (this.visited.indexOf(r2d1.toString()) !== -1)) {
            node.right2Down1 = null;
        } else {
            node.right2Down1 = new Node(r2d1);
            queue.push(node.right2Down1);
            this.visited.push(node.right2Down1.pos.toString());
           // console.log("Added " + node.right2Down1.pos + " to Q");
        }
        const r1d2 = [start[0] + 1, start[1] - 2];
        if (!this.isValid(r1d2, end)|| (this.visited.indexOf(r1d2.toString()) !== -1)) {
            node.right1Down2 = null;
        } else {
            node.right1Down2 = new Node(r1d2);
            queue.push(node.right1Down2);
            this.visited.push(node.right1Down2.pos.toString());
            //console.log("Added " + node.right1Down2.pos + " to Q");
        }
        const l2d1 = [start[0] - 2, start[1] - 1];
        if (!this.isValid(l2d1, end)|| (this.visited.indexOf(l2d1.toString()) !== -1)) {
            node.left2Down1 = null;
        } else {
            node.left2Down1 = new Node(l2d1);
            queue.push(node.left2Down1);
            this.visited.push(node.left2Down1.pos.toString());
            //console.log("Added " + node.left2Down1.pos + " to Q");
        }
        const l1d2 = [start[0] - 1, start[1] - 2];
        if (!this.isValid(l1d2, end)|| (this.visited.indexOf(l1d2.toString()) !== -1)) {
            node.left1Down2 = null;
        } else {
            node.left1Down2 = new Node(l1d2);
            queue.push(node.left1Down2);
            this.visited.push(node.left1Down2.pos.toString());
            //console.log("Added " + node.left1Down2.pos + " to Q");
        }
        const l2u1 = [start[0] - 2, start[1] + 1];
        if (!this.isValid(l2u1, end) || (this.visited.indexOf(l2u1.toString()) !== -1)) {
            node.left2Up1 = null;
        } else {
            node.left2Up1 = new Node(l2u1);
            queue.push(node.left2Up1);
            this.visited.push(node.left2Up1.pos.toString());
            //console.log("Added " + node.left2Up1.pos + " to Q");
        }
        const l1u2 = [start[0] - 1, start[1] + 2];
        if (!this.isValid(l1u2, end) || (this.visited.indexOf(l1u2.toString()) !== -1)) {
            node.left1Up2 = null;
        } else {
            node.left1Up2 = new Node(l1u2);
            queue.push(node.left1Up2);
            this.visited.push(node.left1Up2.pos.toString());
            //console.log("Added " + node.left1Up2.pos + " to Q");
        }
        return queue;
    }

    isValid(start, end) {
        return start.length === 2 && end.length === 2 && start[0] <= 7 && start[0] >= 0 && start[1] <= 7 && start[1] >= 0 && end[0] <= 7 && end[0] >= 0 && end[1] <= 7 && end[1] >= 0;
    }

    knightMoves(node, end, path) {
        path.push(node);
        if (node.pos.toString() == end.toString()) {
            this.printPath(path);
            return path;
        }
        if (node.right1Up2 !== null) {
            this.knightMoves(node.right1Up2, end, path);
        }
        if (node.right2Up1 !== null) {
            this.knightMoves(node.right2Up1, end, path);
        }
        if (node.right2Down1 !== null) {
            this.knightMoves(node.right2Down1, end, path);
        }
        if (node.right1Down2 !== null) {
            this.knightMoves(node.right1Down2, end, path);
        }
        if (node.left1Down2 !== null) {
            this.knightMoves(node.left1Down2, end, path);
        }
        if (node.left2Down1 !== null) {
            this.knightMoves(node.left2Down1, end, path);
        }
        if (node.left2Up1 !== null) {
            this.knightMoves(node.left2Up1, end, path);
        }
        if (node.left1Up2 !== null) {
            this.knightMoves(node.left1Up2, end, path);
        }
        path.pop();
        return path;
        
    }

    printPath(path) {
        let printout = "Path found! ";
        for (let i = 0; i < path.length;i++) {
            printout += '[' + path[i].pos + '] -> ';
        }
        printout += (path.length-1) + ' total moves';
        console.log(printout);
    }

}



buildBoard();
//const knight = new Graph([0, 0], [3, 3]);
//const knight2 = new Graph([3, 3], [4, 3]);
const knight = new Graph([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)], [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]);
knight.knightMoves(knight.root, knight.end, []);
//knight2.knightMoves(knight2.root, [4, 3], []);