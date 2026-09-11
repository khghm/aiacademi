import { LessonBlock } from './LessonViewer';

// تولید محتوای غنی و استاندارد برای هر درس
export function generateRichContent(topic: string, details: {
  intro?: string;
  stats?: { label: string; value: string; color: string }[];
  process?: { title: string; steps: string[] };
  table?: { title: string; headers: string[]; rows: string[][] };
  code?: { title: string; language: string; code: string };
  tips?: string[];
  warnings?: string[];
  checklist?: string[];
  quote?: { text: string; author?: string };
  comparison?: { left: string[]; right: string[] };
  timeline?: { title: string; steps: { title: string; description: string }[] };
}): LessonBlock[] {
  const blocks: LessonBlock[] = [];

  // مقدمه
  blocks.push({
    type: 'paragraph',
    content: details.intro || `${topic} یکی از مهم‌ترین و کاربردی‌ترین مهارت‌ها در دنیای امروز است. در این درس جامع، شما با مفاهیم پایه، تکنیک‌های حرفه‌ای، ابزارها، مثال‌های عملی و کاربردهای واقعی آن آشنا خواهید شد. این درس به گونه‌ای طراحی شده که پس از اتمام آن، بتوانید به صورت مستقل و حرفه‌ای در این حوزه فعالیت کنید.`
  });

  // آمار و ارقام
  if (details.stats) {
    blocks.push({ type: 'stats', content: details.stats });
  } else {
    blocks.push({
      type: 'stats',
      content: [
        { label: 'افزایش بهره‌وری', value: '۸۰٪', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'کاهش زمان', value: '۷۰٪', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'افزایش کیفیت', value: '۹۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'بازگشت سرمایه', value: '۳ ماه', color: 'from-amber-500/20 to-orange-500/20' },
      ]
    });
  }

  // اطلاعات پایه
  blocks.push({
    type: 'info',
    content: {
      type: 'info',
      title: `چرا ${topic} مهم است؟`,
      content: `در دنیای امروز، تسلط بر ${topic} می‌تواند تفاوت بین موفقیت و شکست باشد. این مهارت به شما اجازه می‌دهد سریع‌تر، بهتر و هوشمندتر کار کنید. شرکت‌های پیشرو در سراسر جهان از این تکنولوژی استفاده می‌کنند و کسانی که زودتر آن را یاد بگیرند، مزیت رقابتی قابل توجهی خواهند داشت.`
    }
  });

  // فرآیند
  if (details.process) {
    blocks.push({
      type: 'flow',
      content: {
        title: details.process.title,
        steps: details.process.steps.map(s => ({ label: s }))
      }
    });
  } else {
    blocks.push({
      type: 'flow',
      content: {
        title: `فرآیند ${topic}`,
        steps: [
          { label: 'یادگیری مبانی', sublabel: 'مفاهیم پایه' },
          { label: 'انتخاب ابزار', sublabel: 'بهترین ابزارها' },
          { label: 'تمرین عملی', sublabel: 'پروژه‌های واقعی' },
          { label: 'بهینه‌سازی', sublabel: 'بهبود عملکرد' },
          { label: 'تسلط', sublabel: 'سطح حرفه‌ای' },
        ]
      }
    });
  }

  // جدول
  if (details.table) {
    blocks.push({ type: 'table', content: details.table });
  }

  // مقایسه
  if (details.comparison) {
    blocks.push({
      type: 'comparison',
      content: {
        title: `مقایسه روش‌های ${topic}`,
        left: { title: 'روش سنتی', items: details.comparison.left, color: 'border-rose-500/30' },
        right: { title: 'روش مدرن', items: details.comparison.right, color: 'border-emerald-500/30' }
      }
    });
  } else {
    blocks.push({
      type: 'comparison',
      content: {
        title: `${topic}: سنتی در برابر مدرن`,
        left: {
          title: 'روش سنتی',
          items: ['زمان‌بر و پرهزینه', 'نیاز به تخصص بالا', 'محدودیت خلاقیت', 'صعب‌الوصول', 'غیرقابل مقیاس'],
          color: 'border-rose-500/30'
        },
        right: {
          title: 'روش مدرن',
          items: ['سریع و ارزان', 'آسان برای همه', 'خلاقیت نامحدود', 'دسترسی ۲۴/۷', 'کاملاً مقیاس‌پذیر'],
          color: 'border-emerald-500/30'
        }
      }
    });
  }

  // کد
  if (details.code) {
    blocks.push({ type: 'code', content: details.code });
  }

  // Timeline
  if (details.timeline) {
    blocks.push({ type: 'timeline', content: details.timeline });
  }

  // نکات طلایی
  blocks.push({ type: 'heading', content: { text: 'نکات کلیدی و طلایی', size: 'xl', mt: '8' } });
  if (details.tips) {
    blocks.push({ type: 'info', content: { type: 'tip', title: 'نکات طلایی', content: details.tips } });
  } else {
    blocks.push({
      type: 'info',
      content: {
        type: 'tip',
        title: 'نکات طلایی',
        content: [
          'همیشه با یک برنامه واضح و مشخص شروع کنید',
          'از ابزارهای مناسب و به‌روز استفاده کنید',
          'تست و بازبینی مداوم داشته باشید',
          'از اشتباهات خود و دیگران یاد بگیرید',
          'به‌روز باشید و یادگیری مداوم داشته باشید',
          'با پروژه‌های واقعی تمرین کنید',
          'از جامعه و متخصصان کمک بگیرید',
          'صبر و استمرار کلید موفقیت است',
        ]
      }
    });
  }

  // اشتباهات رایج
  blocks.push({ type: 'heading', content: { text: 'اشتباهات رایج و راه‌حل‌ها', size: 'xl', mt: '8' } });
  if (details.warnings) {
    blocks.push({ type: 'info', content: { type: 'warning', title: 'اشتباهات رایج', content: details.warnings } });
  } else {
    blocks.push({
      type: 'info',
      content: {
        type: 'warning',
        title: 'اشتباهات رایج',
        content: [
          'شروع بدون برنامه‌ریزی و هدف مشخص',
          'استفاده از ابزار نامناسب برای کار',
          'عدم تست و بازبینی منظم',
          'انتظار نتیجه فوری و کامل',
          'عدم یادگیری مداوم و به‌روز بودن',
          'کپی کردن بدون درک مفاهیم',
          'نادیده گرفتن بازخورد و انتقاد',
          'عدم تمرین کافی و عملی',
        ]
      }
    });
  }

  // چک‌لیست
  blocks.push({ type: 'heading', content: { text: 'چک‌لیست موفقیت', size: 'xl', mt: '8' } });
  if (details.checklist) {
    blocks.push({
      type: 'checklist',
      content: {
        title: 'چک‌لیست نهایی',
        items: details.checklist.map(text => ({ text, checked: false }))
      }
    });
  } else {
    blocks.push({
      type: 'checklist',
      content: {
        title: 'چک‌لیست نهایی',
        items: [
          { text: 'هدف خود را مشخص کرده‌ام', checked: false },
          { text: 'ابزار مناسب را انتخاب کرده‌ام', checked: false },
          { text: 'برنامه‌ریزی کرده‌ام', checked: false },
          { text: 'منابع لازم را آماده کرده‌ام', checked: false },
          { text: 'محیط کار را آماده کرده‌ام', checked: false },
          { text: 'آماده شروع هستم', checked: false },
          { text: 'زمان کافی اختصاص داده‌ام', checked: false },
          { text: 'سیستم بازبینی دارم', checked: false },
        ]
      }
    });
  }

  // نقل قول
  blocks.push({ type: 'heading', content: { text: 'الهام‌بخش', size: 'xl', mt: '8' } });
  if (details.quote) {
    blocks.push({ type: 'quote', content: details.quote });
  } else {
    blocks.push({
      type: 'quote',
      content: {
        text: `موفقیت در ${topic} نیازمند تمرین مداوم، یادگیری همیشگی و پشتکار است. هر قدم کوچک شما را به هدف نزدیک‌تر می‌کند.`,
        author: 'ناشناس'
      }
    });
  }

  // جمع‌بندی
  blocks.push({ type: 'heading', content: { text: 'جمع‌بندی و اقدامات بعدی', size: 'xl', mt: '8' } });
  blocks.push({
    type: 'info',
    content: {
      type: 'success',
      title: 'اقدامات فوری',
      content: [
        'همین امروز اولین قدم را بردارید',
        'یک پروژه کوچک برای تمرین انتخاب کنید',
        'ابزار مورد نیاز را نصب و راه‌اندازی کنید',
        '۳۰ دقیقه در روز برای تمرین وقت بگذارید',
        'یادداشت‌برداری کنید و پیشرفت خود را ثبت کنید',
        'در جامعه مرتبط عضو شوید و سوال بپرسید',
      ]
    }
  });

  return blocks;
}
