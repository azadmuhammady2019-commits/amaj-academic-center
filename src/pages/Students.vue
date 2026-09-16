<template>
  <div>
    <h2>مدیریت شاگردان</h2>
    <div class="toolbar">
      <input v-model="searchQuery" placeholder="نام، شماره یا سطح..." />
      <button @click="refreshSearch">تازه‌سازی</button>
    </div>

    <div class="card">
      <table>
        <thead>
          <tr>
            <th>شماره</th>
            <th>نام</th>
            <th>نام پدر</th>
            <th>جنسیت</th>
            <th>سطح</th>
            <th>صنف</th>
            <th>فیس</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.id">
            <td>{{ student.number }}</td>
            <td>{{ student.firstName }} {{ student.lastName }}</td>
            <td>{{ student.fatherName }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.level }}</td>
            <td>{{ student.classId }}</td>
            <td>{{ student.feeAmount }}</td>
            <td><span class="badge">{{ student.status }}</span></td>
          </tr>
        </tbody>
      </table>
      <div v-if="filteredStudents.length === 0" class="empty">
        هیچ شاگردی یافت نشد
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Students',
  props: {
    db: Object
  },
  emits: ['save'],
  setup(props) {
    const searchQuery = ref('')

    const filteredStudents = computed(() => {
      const q = searchQuery.value.toLowerCase()
      return props.db.students.filter(x =>
        JSON.stringify(x).toLowerCase().includes(q)
      )
    })

    const refreshSearch = () => {
      // Force re-render
    }

    return {
      searchQuery,
      filteredStudents,
      refreshSearch
    }
  }
}
</script>
