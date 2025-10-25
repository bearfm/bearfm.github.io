---
layout: page
title: Archive
subtitle: "Explore all our stories from around the world"
permalink: /archive/
---

<div class="archive-page">
    <div class="archive-content">
        <div class="filter-section">
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All Stories</button>
                <button class="filter-btn" data-filter="explore">Explore</button>
                <button class="filter-btn" data-filter="travelogue">Travelogue</button>
                <button class="filter-btn" data-filter="notepad">Notepad</button>
            </div>
        </div>

        <div class="archive-grid">
            {% for post in site.posts %}
            <article class="archive-card" data-category="{{ post.category }}">
                {% if post.featured_image %}
                <div class="archive-image">
                    <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}">
                </div>
                {% endif %}
                <div class="archive-content-card">
                    <div class="archive-meta">
                        <span class="archive-date">{{ post.date | date: '%B %d, %Y' }}</span>
                        {% if post.category %}
                        <span class="archive-category">{{ post.category }}</span>
                        {% endif %}
                    </div>
                    <h3 class="archive-title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h3>
                    <p class="archive-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
                    <a href="{{ post.url | relative_url }}" class="archive-read-more">Read More</a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</div>

<style>
.archive-page{padding:60px 0}
.archive-header{text-align:center;margin-bottom:3rem}
.archive-header h1{font-size:3rem;margin-bottom:1rem;color:#333}
.archive-header p{font-size:1.2rem;color:#666;max-width:600px;margin:0 auto}
.filter-section{text-align:center;margin-bottom:3rem}
.filter-buttons{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap}
.filter-btn{padding:10px 20px;border:2px solid #fc0;background:0 0;color:#333;border-radius:25px;cursor:pointer;transition:all .3s ease;font-weight:600}
.filter-btn.active,.filter-btn:hover{background-color:#fc0;color:#333}
.archive-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}
.archive-card{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,.1);transition:transform .3s ease,box-shadow .3s ease}
.archive-card:hover{transform:translateY(-5px);box-shadow:0 10px 25px rgba(0,0,0,.15)}
.archive-image{height:200px;overflow:hidden}
.archive-image img{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}
.archive-card:hover .archive-image img{transform:scale(1.05)}
.archive-content-card{padding:1.5rem}
.archive-meta{display:flex;gap:1rem;margin-bottom:.5rem;font-size:.9rem;color:#666}
.archive-category{background-color:#fc0;color:#333;padding:2px 8px;border-radius:12px;font-size:.8rem;font-weight:600}
.archive-title{font-size:1.25rem;margin-bottom:.5rem}
.archive-title a{color:#333;transition:color .3s ease}
.archive-title a:hover{color:#fc0}
.archive-subtitle{font-size:1rem;color:#666;margin-bottom:1rem;font-style:italic}
.archive-excerpt{color:#666;margin-bottom:1rem;line-height:1.5}
.archive-read-more{color:#fc0;font-weight:600;text-transform:uppercase;font-size:.9rem;letter-spacing:.5px}
.archive-read-more:hover{color:#e6b800}
@media (max-width:768px){.archive-grid{grid-template-columns:1fr}
.filter-buttons{flex-direction:column;align-items:center}
.archive-header h1{font-size:2rem}
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const archiveCards = document.querySelectorAll('.archive-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            archiveCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add transition styles
    archiveCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});
</script>