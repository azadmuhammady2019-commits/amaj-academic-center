<template>
  <div class="app">
    <Header />
    <Navigation :items="navItems" @select="currentPage = $event" :active="currentPage" />
    <main>
      <Dashboard v-if="currentPage === 'dashboard'" :db="db" />
      <Students v-if="currentPage === 'students'" :db="db" @save="saveDatabase" />
      <Teachers v-if="currentPage === 'teachers'" :db="db" @save="saveDatabase" />
      <Classes v-if="currentPage === 'classes'" :db="db" />
      <Fees v-if="currentPage === 'fees'" :db="db" />
      <Attendance v-if="currentPage === 'attendance'" :db="db" />
      <Exams v-if="currentPage === 'exams'" :db="db" />
      <Books v-if="currentPage === 'books'" :db="db" />
      <Expenses v-if="currentPage === 'expenses'" :db="db" />
      <Backup v-if="currentPage === 'backup'" :db="db" @save="saveDatabase" />
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Dashboard from './pages/Dashboard.vue'
import Students from './pages/Students.vue'
import Teachers from './pages/Teachers.vue'
import Classes from './pages/Classes.vue'
import Fees from './pages/Fees.vue'
import Attendance from './pages/Attendance.vue'
import Exams from './pages/Exams.vue'
import Books from './pages/Books.vue'
import Expenses from './pages/Expenses.vue'
import Backup from './pages/Backup.vue'
import Footer from './components/Footer.vue'
import { useDatabase } from './composables/useDatabase'

export default {
  components: {
    Header,
    Navigation,
    Dashboard,
    Students,
    Teachers,
    Classes,
    Fees,
    Attendance,
    Exams,
    Books,
    Expenses,
    Backup,
    Footer
  },
  setup() {
    const currentPage = ref('dashboard')
    const { db, saveDatabase, loadDatabase } = useDatabase()

    const navItems = [
      { id: 'dashboard', label: 'داشبورد' },
      { id: 'students', label: 'شاگردان' },
      { id: 'teachers', label: 'استادان' },
      { id: 'classes', label: 'صنف‌ها' },
      { id: 'fees', label: 'فیس‌ها' },
      { id: 'attendance', label: 'حاضری' },
      { id: 'exams', label: 'امتحانات' },
      { id: 'books', label: 'کتاب‌ها' },
      { id: 'expenses', label: 'مصارف' },
      { id: 'backup', label: 'پشتیبان‌گیری' }
    ]

    onMounted(() => {
      loadDatabase()
    })

    return {
      currentPage,
      navItems,
      db,
      saveDatabase
    }
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f6f8;
}

main {
  flex: 1;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
