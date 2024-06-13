V = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
E = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [3, 7],
  [4, 8],
  [4, 9],
  [5, 10],
  [5, 11],
  [6, 12],
  [6, 13],
  [7, 14],
  [7, 15],
];

let Dagoba = {};
//this is  a prototype
Dagoba.G = {};
Dagoba.graph = (V, E) => {
  let graph = Object.create(Dagoba.G);
  graph.edges = [];
  graph.vertices = [];
  graph.vertexIndex = {};
  graph.autoid = 1;
  if (Array.isArray(V)) graph.addVertices(V);
  if (Array.isArray(E)) graph.addEdges(E);
  return graph;
};

const parent = (vertices) => {
  return E.reduce((acc, [parent, child]) => {
    return vertices.includes(child) ? acc.concat(parent) : acc;
  }, []);
};
const child = (vertices) => {
  return E.reduce((acc, [parent, child]) => {
    return vertices.includes(parent) ? acc.concat(child) : acc;
  }, []);
};

Dagoba.G.addVertices = (vs) => {
  vs.forEach(() => {
    this.addVertex.bind(this);
  });
};
Dagoba.G.addEdges = (vs) => {
  vs.forEach(() => {
    this.addEdge.bind(this);
  });
};

Dagoba.G.addVertex = (vertex) => {};
