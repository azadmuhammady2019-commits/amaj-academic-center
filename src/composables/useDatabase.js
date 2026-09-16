import { ref } from 'vue'

const initialData = {
  students: [
    { id: "s1", number: "1001", firstName: "احمد", lastName: "کریم", fatherName: "ولی", gender: "مرد", address: "امام صاحب - ناحیه ۱", birthDate: "1390-01-10", phone: "0770000000", parentPhone: "0779000000", regDate: "1404-01-01", level: "Beginner", classId: "c1", status: "فعال", notes: "", feeAmount: 400 },
    { id: "s2", number: "1002", firstName: "زهرا", lastName: "رحیمی", fatherName: "نور", gender: "زن", address: "امام صاحب - ناحیه ۲", birthDate: "1390-02-11", phone: "0770001234", parentPhone: "0779004321", regDate: "1404-02-02", level: "Elementary", classId: "c2", status: "فعال", notes: "", feeAmount: 400 }
  ],
  teachers: [
    { id: "t1", name: "استاد جمال الدین", fatherName: "نور احمد", phone: "0700112233", specialty: "زبان انگلیسی", level: "Intermediate - B2", hireDate: "1401-01-01", contractType: "دائمی", status: "فعال", notes: "" },
    { id: "t2", name: "استاده مریم", fatherName: "غلام حیدر", phone: "0700223344", specialty: "زبان انگلیسی", level: "Beginner - Elementary", hireDate: "1402-05-01", contractType: "دائمی", status: "فعال", notes: "" }
  ],
  classes: [
    { id: "c1", name: "صنف الف", code: "AM-101", level: "Elementary", teacherId: "t2", days: ["شنبه", "دوشنبه", "چهارشنبه"], startTime: "08:00", endTime: "09:30", room: "اتاق ۱", startDate: "1404-01-01", endDate: "1404-06-01", capacity: 25, status: "فعال" },
    { id: "c2", name: "صنف ب", code: "AM-102", level: "Pre-Intermediate", teacherId: "t1", days: ["یکشنبه", "سه‌شنبه", "پنجشنبه"], startTime: "10:00", endTime: "11:30", room: "اتاق ۲", startDate: "1404-01-01", endDate: "1404-06-01", capacity: 25, status: "فعال" }
  ],
  feePayments: [
    { id: "f1", studentId: "s1", month: "1404-01", amount: 400, discount: 0, paidDate: "1404-01-05", status: "پرداخت شده", receiptNo: "R-1000" },
    { id: "f2", studentId: "s2", month: "1404-02", amount: 400, discount: 0, paidDate: "1404-02-05", status: "پرداخت شده", receiptNo: "R-1001" }
  ],
  attendance: [
    { id: "a1", classId: "c1", date: "1404-06-01", records: { s1: "present", s2: "absent" } }
  ],
  expenses: [
    { id: "e1", category: "کرایه", amount: 5000, date: "1404-06-01", description: "کرایه ماهانه ساختمان", payer: "مدیر" },
    { id: "e2", category: "برق", amount: 800, date: "1404-06-03", description: "بل برق ماه", payer: "حسابدار" }
  ],
  exams: [
    { id: "ex1", studentId: "s1", classId: "c1", examName: "امتحان ماهانه", date: "1404-06-10", listening: 15, speaking: 14, reading: 16, writing: 13, grammar: 15, vocabulary: 14, total: 87, percentage: 73, result: "کامیاب", note: "" }
  ],
  books: [
    { id: "b1", name: "English File Beginner", level: "Beginner", printed: 40, distributed: 28, price: 250, printDate: "1404-01-10", notes: "" }
  ],
  settings: {
    academyName: "آموزشگاه علمی آماج",
    academyNameEn: "Amaj Academic Center",
    defaultFee: 400,
    salaryPercent: 40,
    receiptCounter: 2000
  }
}

export function useDatabase() {
  const db = ref(null)

  const loadDatabase = () => {
    const stored = localStorage.getItem('amajDB')
    if (stored) {
      try {
        db.value = JSON.parse(stored)
      } catch (e) {
        db.value = JSON.parse(JSON.stringify(initialData))
      }
    } else {
      db.value = JSON.parse(JSON.stringify(initialData))
    }
  }

  const saveDatabase = () => {
    localStorage.setItem('amajDB', JSON.stringify(db.value))
  }

  return {
    db,
    loadDatabase,
    saveDatabase
  }
}
