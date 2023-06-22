# Knight Travails
In chess, the knight can reach every square on a chessboard and do so without revisiting any square along the way. This is called a knight tour. This project aims to use the ability for the knight to travel to any square to find the quickest path from one square to the next.

The page initially loads with a nearly empty html file, just one div in the body with a class of "boardContainer". All elements are added using JavaScript.

The knight's path is calculated using a node graph structure. Starting with the knight's starting position, 8 nodes are attached as the possible next move the knight could take. Moves that would take the knight off of the board or that have been visited before are given a null value. Each valid move (i.e. turn #1) is added to a queue to attach that node's possible next moves (turn #2). All initial moves (turn #1) are calculated before beginning to attach next moves (turn #3) to previously calculated moves (turn #2). This process continues until each square on the board is in the graph data structure.

The endpoint for the knight is then searched for within the graph using a depth-first approach. This is the shortest path because the graph does not contain duplicate locations and calculates using First In, First Out with the queue.
