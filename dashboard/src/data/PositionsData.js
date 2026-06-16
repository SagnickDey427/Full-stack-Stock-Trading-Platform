// Dummy data representing active positions
  const positions = [
    { id: 1, product: "MIS", instrument: "SBIN.NS", qty: 250, avg: 820.50, ltp: 828.10, chg: 0.92 },
    { id: 2, product: "NRML", instrument: "^NSEI", qty: 50, avg: 145.20, ltp: 112.40, chg: -22.58 },
  ];

  // Calculate derived values (P&L) dynamically
  const calculatedPositions = positions.map(pos => {
    const pnl = (pos.ltp - pos.avg) * pos.qty;
    return { ...pos, pnl };
  });


  export {positions, calculatedPositions};