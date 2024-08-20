let myChart; // Biến toàn cục để lưu trữ biểu đồ hiện tại

function plotGraph() {
    const equation = document.getElementById("equation").value;
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    
    // Xóa biểu đồ cũ nếu tồn tại
    if (myChart) {
        myChart.destroy();
    }
    
    let xValues = [];
    let yValues = [];
    
    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        // Đánh giá phương trình để tính giá trị y
        try {
            yValues.push(eval(equation));
        } catch (error) {
            alert("Lỗi khi đánh giá phương trình. Vui lòng nhập phương trình hợp lệ!");
            return;
        }
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'Graph',
                data: yValues,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
}
