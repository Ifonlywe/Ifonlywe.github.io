import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import csv from 'csv-parser';

// Assuming you already have the values and tree calculated
const values = [
  ["0x1111111111111111111111111111111111111111", "5000000000000000000"],
  ["0x2222222222222222222222222222222222222222", "2500000000000000000"]
];

const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

// Display the Merkle root on the webpage
const merkleRootElement = document.getElementById('merkleRoot');
merkleRootElement.innerText = 'Merkle Root: ' + tree.root;

