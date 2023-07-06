import React, { useState, useEffect } from "react";
import "../style/SeatDetail.css";

// 페이지 새로고침 시에 3개의 랜덤한 좌석이 선택되고, 
// 클릭하여 좌석을 선택하거나 해제할 수 있음.

const SeatDetail = () => {
  const [selectedSeats, setSelectedSeats] = useState([]); // 선택된 좌석을 저장하는 상태
  const [seatRows, setSeatRows] = useState([]); // 좌석 정보를 저장하는 상태

  useEffect(() => {
    initializeSeats();
  }, []);

  useEffect(() => {
    if (seatRows.length > 0) {
      setRandomSeats();
    }
  }, [seatRows]);

  // 좌석 초기화 함수
  const initializeSeats = () => {
    const rows = [
      ["1", "2", "5", "6"],
      ["3", "4", "7", "8"],
      ["9", "10", "11", "12"],
      ["13", "14", "17", "18"],
      ["15", "16", "19", "20"],
    ];

    setSeatRows(rows);
  };

  // 랜덤 좌석 선택 함수
  const setRandomSeats = () => {
    const randomSelectedSeats = [];

    // 3개의 랜덤 좌석 선택
    while (randomSelectedSeats.length < 3) {
      const randomRowIndex = Math.floor(Math.random() * seatRows.length);
      const randomSeatIndex = Math.floor(Math.random() * seatRows[randomRowIndex].length);

      const seat = { row: randomRowIndex, seat: randomSeatIndex };

      // 중복된 좌석이 아닌 경우에만 추가
      if (!randomSelectedSeats.some(
        selectedSeat => selectedSeat.row === seat.row && selectedSeat.seat === seat.seat
      )) {
        randomSelectedSeats.push(seat);
      }
    }

    setSelectedSeats(randomSelectedSeats);
  };

  // 좌석 클릭 핸들러 함수
  const handleSeatClick = (rowIndex, seatIndex) => {
    setSelectedSeats(prevSelectedSeats => {
      const seat = { row: rowIndex, seat: seatIndex };

      // 선택된 좌석인 경우 해제, 아닌 경우 추가
      if (prevSelectedSeats.some(
        selectedSeat => selectedSeat.row === seat.row && selectedSeat.seat === seat.seat
      )) {
        return prevSelectedSeats.filter(
          selectedSeat => selectedSeat.row !== seat.row || selectedSeat.seat !== seat.seat
        );
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  return (
    <div className="seat-grid">
      {seatRows.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat, seatIndex) => {
            const isSelected = selectedSeats.some(
              selectedSeat => selectedSeat.row === rowIndex && selectedSeat.seat === seatIndex
            );

            return (
              <div
                key={seatIndex}
                className={`seat ${isSelected ? "selected" : ""}`}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              >
                {/* 숫자 대신 공백으로 표시 */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatDetail;
