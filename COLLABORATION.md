
Paste this:

```md
# Collaboration Simulation

The editor simulates collaborative editing using a frontend-only model.

## Approach
- Each client produces operations
- Operations include a sequence number and client ID
- All operations are merged deterministically

## Proof of Convergence
Given the same set of operations, all clients:
- Apply operations in the same order
- Reach the same final document state

This guarantees convergence without data loss.

## Scope
This is a simulation, not a networked CRDT implementation.
