<template>
  <div class="reward">
    <Section class="reward-header">
      금 몇개, 은 몇개, 동 몇개, 기타 몇개 / 정렬 : 날짜순, 가나다순, 메달순 / 검색 : 이름검색, 날짜검색, 금은동검색
    </Section>
    <div class="reward-list">
      <Section>
        <img src="@/assets/reward/gold.png" alt="">
        <div>
          <div class="title">어쩌구 저쩌구 대상</div>
          <div class="title">주관 : 어쩌구 저쩌구 기관</div>
          <div class="title">일시 : 2020.12.34</div>
        </div>
      </Section>
      <Section>
        <img src="@/assets/reward/silver.png" alt="">
        <div>
          <div class="title">어쩌구 저쩌구 대상</div>
          <div class="title">주관 : 어쩌구 저쩌구 기관</div>
          <div class="title">일시 : 2020.12.34</div>
        </div>
      </Section>
      <Section>
        <img src="@/assets/reward/bronze.png" alt="">
        <div>
          <div class="title">어쩌구 저쩌구 대상</div>
          <div class="title">주관 : 어쩌구 저쩌구 기관</div>
          <div class="title">일시 : 2020.12.34</div>
        </div>
      </Section>
    </div>
  </div>
</template>

<script>
import Section from '@/views/common/section'

export default {
  name: 'reward',

  components: {
    Section,
  }
}
</script>

<style>
  @import url('./reward.css');
</style>