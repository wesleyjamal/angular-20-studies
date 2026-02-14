import { Component, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ViaCepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: boolean;
}

@Component({
    selector: 'app-address-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './address.component.html',
    styleUrl: './address.component.scss'
})
export class AddressFormComponent {
    cep = signal('');
    street = signal('');
    neighborhood = signal('');
    city = signal('');
    state = signal('');
    uf = signal('');
    complement = signal('');

    // Resource for CEP search
    cepSearch = resource({
        request: () => this.cep().replace(/\D/g, ''),
        loader: async ({ request: cep }) => {
            if (cep.length !== 8) return null;

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) throw new Error('CEP search failed');

            const data: ViaCepResponse = await response.json();

            if (data.erro) {
                throw new Error('CEP not found');
            }

            // Auto-fill fields
            this.street.set(data.logradouro);
            this.neighborhood.set(data.bairro);
            this.city.set(data.localidade);
            this.state.set(data.uf);
            this.uf.set(data.uf);

            return data;
        }
    });

    onCepInput(event: Event) {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);

        // Format mask: 00000-000
        if (value.length > 5) {
            input.value = `${value.slice(0, 5)}-${value.slice(5)}`;
        } else {
            input.value = value;
        }

        this.cep.set(value);
    }

    onSubmit() {
        if (this.cep().length === 8) {
            console.log('Form Submitted:', {
                cep: this.cep(),
                street: this.street(),
                neighborhood: this.neighborhood(),
                city: this.city(),
                state: this.state(),
                complement: this.complement()
            });
            alert('Endereço salvo com sucesso! (Console para detalhes)');
        }
    }
}
