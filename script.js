function changeLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-th][data-en]'); // เลือก elements ที่มีทั้ง data-th และ data-en

    translatableElements.forEach(element => {
        const thaiText = element.getAttribute('data-th');
        const englishText = element.getAttribute('data-en');

        if (lang === 'th') {
            element.textContent = thaiText;
        } else if (lang === 'en') {
            element.textContent = englishText;
        }
    });
}

// ตั้งค่าภาษาเริ่มต้น (ถ้าต้องการ) เช่น ภาษาไทยเมื่อโหลดหน้าเว็บครั้งแรก
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('th'); // หรือ 'en' หากต้องการเริ่มต้นด้วยภาษาอังกฤษ
});