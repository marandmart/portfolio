from django.views.generic import ListView
from .models import PortfolioSite

class IndexView(ListView):
    model = PortfolioSite
    template_name = 'homepage/index.html'
    context_object_name = 'info'
