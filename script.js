/*


document.addEventListener("DOMContentLoaded", function () {

    const forms = [
        document.getElementById("customerForm"),
        document.getElementById("contractorForm")
    ];

    forms.forEach(function (form) {

        if (!form) return;

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            const message = form.querySelector(".form-message");

            message.textContent =
                "Demo form validated successfully. " +
                "No information has been submitted or saved.";

            form.reset();

        });

    });

});*/


/* LOQELO LANGUAGE SWITCHING */

document.addEventListener("DOMContentLoaded", function () {

    const languageSelect =
        document.getElementById("languageSelect");

    const heroTitle =
        document.getElementById("heroTitle");

    const translations = {
        en: {
            hero: "Everything your <br><span>place needs.</span>",
            navHow: "How It Works",
            navExplore: "Explore Loqelo",
            navWaitlist: "Join Waitlist",            
            howTitle: "From your needs to the right pro.",
            step1: "Describe your need",
            step2: "Get matched",
            step3: "Receive offers",
            step4: "Choose your pro",            
            heroDesc: "From home improvements to garden care and office services, Loqelo connects you with the right professionals.",
            howDesc: "One simple journey from describing your job to choosing the perfect provider.",
            stepDesc1: "Tell Loqelo what you need in your own words.",
            stepDesc2: "Loqelo helps connect your request with relevant local professionals.",
            stepDesc3: "Receive quotes from service providers interested in your job.",
            stepDesc4: "Compare prices, ratings and offers, then choose your provider.",          
            videoLabel: "MEET LOQELO",
            videoTitle: "One Platform. Endless Possibilities.",
            videoDesc: "Discover how Loqelo connects you with the right professionals for your home, garden and office.",
            videoCaption: "A smarter way to get things done. Coming February 2027.",
            showcaseLabel: "EXPLORE THE PLATFORM",
            showcaseTitle: "Designed to make life easier.",
            showcaseDesc: "Discover how Loqelo makes finding and offering services simple.",
            card1Title: "Discover Loqelo",
            card1Desc: "Describe your needs and find the right professionals.",
            card2Title: "For Customers",
            card2Desc: "Manage jobs and compare service provider offers.",
            card3Title: "For Service Providers",
            card3Desc: "Discover new jobs and connect with potential customers.",
            waitLabel: "BE PART OF WHAT'S NEXT",
            waitTitle: "Get early access to Loqelo.",
            waitDesc: "Everything your place needs. Coming February 2027. Join our pre-launch waitlist.",
            customerCategory: "FOR CUSTOMERS",
            customerTitle: "Find the right help.",
            customerDesc: "Join the waitlist and be among the first to discover Loqelo.",
            emailLabel: "Email address *",
            customerCountryLabel: "Country of residence *",
            customerCountryPlaceholder: "Enter your country",
            customerTypeLabel: "I am joining as (optional)",
            customerButton: "Join as a Customer →",
            providerCategory: "FOR SERVICE PROVIDERS",
            providerTitle: "Grow your opportunities.",
            providerDesc: "Be among the first to discover new opportunities with Loqelo.",
            providerEmailLabel: "Business email *",
            providerCountryLabel: "Country of operation *",
            providerCountryPlaceholder: "Where do you provide services?",
            providerTypeLabel: "Provider type (optional)",
            providerButton: "Join as a Provider →",
            selectOption: "Select an option",
            individual: "Individual",
            business: "Business",
            consentText: "I agree to receive email updates about the Loqelo launch and related announcements.",
            waitNote: "Pre-launch preview • February 2027",
            comingLabel: "COMING FEBRUARY 2027",
            howLabel: "HOW LOQELO WORKS",
            comingLabel: "COMING FEBRUARY 2027",
            heroWaitlist: "Join the Waitlist",
            heroDiscover: "Discover Loqelo",

            footerTagline: "Everything your place needs.",
            footerLaunch: "Launching February 2027",
            footerExplore: "Explore",
            footerPlatform: "Platform Preview",
            footerJoinTitle: "Be part of Loqelo.",
            footerJoinDesc: "Get ready for a smarter way to manage your place.",
            footerCopyright: "© 2026 Loqelo. All rights reserved. Design & Developed By | Dev Nazmul |",
            footerBackTop: "Back to top ↑"





        },

        bn: {
            hero: "আপনার প্রয়োজনের <br><span>সব সেবা এক জায়গায়।</span>",
            navHow: "যেভাবে কাজ করে",
            navExplore: "Loqelo সম্পর্কে জানুন",
            navWaitlist: "ওয়েটলিস্টে যোগ দিন",            
            howTitle: "আপনার প্রয়োজন থেকে সঠিক সেবাদাতা পর্যন্ত।",
            step1: "আপনার প্রয়োজন জানান",
            step2: "সঠিক সেবাদাতা খুঁজুন",
            step3: "অফার গ্রহণ করুন",
            step4: "সেবাদাতা নির্বাচন করুন",            
            heroDesc: "বাড়ি, বাগান ও অফিসের প্রয়োজনীয় সেবার জন্য Loqelo আপনাকে উপযুক্ত পেশাদারদের সঙ্গে যুক্ত করে।",
            howDesc: "আপনার প্রয়োজন জানান, অফার গ্রহণ করুন এবং পছন্দের সেবাদাতা নির্বাচন করুন।",
            stepDesc1: "আপনার কী ধরনের সেবা প্রয়োজন, তা নিজের ভাষায় লিখুন।",
            stepDesc2: "Loqelo আপনার প্রয়োজন অনুযায়ী উপযুক্ত স্থানীয় সেবাদাতাদের সঙ্গে যোগাযোগের সুযোগ তৈরি করে।",
            stepDesc3: "আপনার কাজ করতে আগ্রহী সেবাদাতাদের কাছ থেকে অফার পান।",
            stepDesc4: "দাম, রেটিং ও অফার তুলনা করে পছন্দের সেবাদাতা নির্বাচন করুন।",            
            videoLabel: "LOQELO পরিচিতি",
            videoTitle: "একটি প্ল্যাটফর্ম, অসংখ্য সম্ভাবনা।",
            videoDesc: "বাড়ি, বাগান ও অফিসের প্রয়োজনীয় সেবার জন্য Loqelo কীভাবে উপযুক্ত পেশাদারদের সঙ্গে যোগাযোগের সুযোগ তৈরি করে তা জানুন।",
            videoCaption: "কাজ সম্পন্ন করার আরও সহজ উপায়। আসছে ফেব্রুয়ারি ২০২৭।",
            showcaseLabel: "প্ল্যাটফর্মটি ঘুরে দেখুন",
            showcaseTitle: "জীবনকে আরও সহজ করার জন্য ডিজাইন করা হয়েছে।",
            showcaseDesc: "Loqelo কীভাবে সেবা খোঁজা এবং সেবা দেওয়াকে সহজ করে তোলে, তা জানুন।",

            card1Title: "Loqelo আবিষ্কার করুন",
            card1Desc: "আপনার প্রয়োজন জানান এবং সঠিক পেশাদার খুঁজে নিন।",

            card2Title: "গ্রাহকদের জন্য",
            card2Desc: "আপনার কাজগুলো পরিচালনা করুন এবং সেবাদাতাদের অফার তুলনা করুন।",

            card3Title: "সেবাদাতাদের জন্য",
            card3Desc: "নতুন কাজ খুঁজুন এবং সম্ভাব্য গ্রাহকদের সাথে যুক্ত হোন।",

            waitLabel: "আগামীর অংশ হোন",
            waitTitle: "Loqelo-এর আগাম সুবিধা পেতে যুক্ত হোন।",
            waitDesc: "আপনার প্রয়োজনের সব সেবা এক জায়গায়। আসছে ফেব্রুয়ারি ২০২৭। এখনই ওয়েটলিস্টে যোগ দিন।",

            customerCategory: "গ্রাহকদের জন্য",
            customerTitle: "সঠিক সেবা খুঁজে নিন।",
            customerDesc: "ওয়েটলিস্টে যোগ দিন এবং সবার আগে Loqelo সম্পর্কে জানুন।",
            emailLabel: "ইমেইল ঠিকানা *",
            customerCountryLabel: "বসবাসের দেশ *",
            customerCountryPlaceholder: "আপনার দেশের নাম লিখুন",
            customerTypeLabel: "আপনি কোন পরিচয়ে যুক্ত হচ্ছেন (ঐচ্ছিক)",
            customerButton: "গ্রাহক হিসেবে যোগ দিন →",

            providerCategory: "সেবাদাতাদের জন্য",
            providerTitle: "আপনার কাজের সুযোগ বাড়ান।",
            providerDesc: "Loqelo-এর মাধ্যমে নতুন কাজের সুযোগ সম্পর্কে সবার আগে জানুন।",
            providerEmailLabel: "ব্যবসায়িক ইমেইল *",
            providerCountryLabel: "যে দেশে সেবা প্রদান করেন *",
            providerCountryPlaceholder: "আপনি কোন দেশে সেবা প্রদান করেন?",
            providerTypeLabel: "সেবাদাতার ধরন (ঐচ্ছিক)",
            providerButton: "সেবাদাতা হিসেবে যোগ দিন →",

            selectOption: "একটি অপশন নির্বাচন করুন",
            individual: "ব্যক্তিগত",
            business: "ব্যবসা প্রতিষ্ঠান",
            consentText: "আমি Loqelo-এর উদ্বোধন ও সংশ্লিষ্ট ঘোষণা সম্পর্কে ইমেইল আপডেট পেতে সম্মতি দিচ্ছি।",
            waitNote: "প্রি-লঞ্চ প্রিভিউ • ফেব্রুয়ারি ২০২৭",
            comingLabel: "আসছে ফেব্রুয়ারি ২০২৭",
            howLabel: "Loqelo যেভাবে কাজ করে",
            comingLabel: "আসছে ফেব্রুয়ারি ২০২৭",
            heroWaitlist: "ওয়েটলিস্টে যোগ দিন",
            heroDiscover: "Loqelo সম্পর্কে জানুন",

            footerTagline: "আপনার প্রয়োজনের সব সেবা এক জায়গায়।",
            footerLaunch: "উদ্বোধন: ফেব্রুয়ারি ২০২৭",
            footerExplore: "ঘুরে দেখুন",
            footerPlatform: "প্ল্যাটফর্মের পরিচিতি",
            footerJoinTitle: "Loqelo-এর অংশ হোন।",
            footerJoinDesc: "আপনার প্রয়োজনীয় সেবা ব্যবস্থাপনার আরও সহজ উপায় আবিষ্কার করুন।",
            footerCopyright: "© ২০২৬ Loqelo। সর্বস্বত্ব সংরক্ষিত। ডিজাইন ও ডেভেলপমেন্ট: | Dev Nazmul|",
            footerBackTop: "উপরে ফিরে যান ↑"





        }
    };

   
    // Get saved language or use browser preference
    const savedLanguage = localStorage.getItem("loqeloLanguage");

    const browserLanguage =
        navigator.language.toLowerCase().startsWith("bn")
            ? "bn"
            : "en";

    let currentLanguage =
        savedLanguage === "bn" || savedLanguage === "en"
            ? savedLanguage
            : browserLanguage;

    // Translate the website
    function applyLanguage(lang) {

        const content = translations[lang];

        if (!content) return;

        currentLanguage = lang;

        // Translate hero title (contains HTML)
        if (heroTitle) {
            heroTitle.innerHTML = content.hero;
        }

        // Translate headings, labels, buttons and text
        document.querySelectorAll("[data-i18n]").forEach(function (element) {

            const key = element.getAttribute("data-i18n");

            if (Object.prototype.hasOwnProperty.call(content, key)) {
                element.textContent = content[key];
            }

        });

        // Translate input placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

            const key = element.getAttribute("data-i18n-placeholder");

            if (Object.prototype.hasOwnProperty.call(content, key)) {
                element.placeholder = content[key];
            }

        });

        // Update displayed confirmation messages
        document.querySelectorAll(".form-message").forEach(function (message) {

            if (message.dataset.submitted === "true") {
                message.textContent = lang === "bn"
                    ? "ডেমো ফর্ম সফলভাবে যাচাই হয়েছে। কোনো তথ্য জমা বা সংরক্ষণ করা হয়নি।"
                    : "Demo form validated successfully. No information has been submitted or saved.";
            }

        });

        // Update page language
        document.documentElement.lang = lang;

        // Save language preference
        localStorage.setItem("loqeloLanguage", lang);

        // Keep selector synchronized
        if (languageSelect) {
            languageSelect.value = lang;
        }

    }

    // Apply language when page loads
    applyLanguage(currentLanguage);

    // Switch language manually
    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            applyLanguage(languageSelect.value);
        });
    }

    // Customer and contractor forms
    const forms = [
        document.getElementById("customerForm"),
        document.getElementById("contractorForm")
    ];

    forms.forEach(function (form) {

        if (!form) return;

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.reportValidity()) return;

            const message = form.querySelector(".form-message");

            if (message) {
                message.dataset.submitted = "true";

                message.textContent = currentLanguage === "bn"
                    ? "ডেমো ফর্ম সফলভাবে যাচাই হয়েছে। কোনো তথ্য জমা বা সংরক্ষণ করা হয়নি।"
                    : "Demo form validated successfully. No information has been submitted or saved.";
            }

            form.reset();

        });

    });

});



/* =====================================
   LOQELO — SCROLL REVEAL CONTROLLER
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(
        ".services-heading, .service-card, " +
        ".how-heading, .step-card, " +
        ".section-heading, .showcase-heading, " +
        ".showcase-card, .waitlist-heading, .waitlist-card"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        return;
    }

    revealElements.forEach(function (element, index) {
        element.classList.add("reveal");

        if (
            element.classList.contains("service-card") ||
            element.classList.contains("step-card") ||
            element.classList.contains("showcase-card") ||
            element.classList.contains("waitlist-card")
        ) {
            element.style.setProperty(
                "--reveal-delay",
                (index % 4) * 80 + "ms"
            );
        }
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});
