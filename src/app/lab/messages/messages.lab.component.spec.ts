import { TestBed } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { MessagesComponentForLab } from "./messages.lab.component";
import { MessageService } from "../../services/message/message.service";
import { Component } from "@angular/core";

describe("2-message component integration testing:", () => {
    let component: MessagesComponentForLab;
    let fixture: ComponentFixture<MessagesComponentForLab>;
    let messageService: MessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MessagesComponentForLab],
            providers: [MessageService],
        }).compileComponents();

        fixture = TestBed.createComponent(MessagesComponentForLab);
        component = fixture.componentInstance;
        messageService = TestBed.inject(MessageService);
        fixture.detectChanges();
    });

    it("expect component template to be empty when no messages exist", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("div.msg")).toBeNull();
    });

    it("then expect div.msg to have the messages after setting it", () => {
        messageService.messages = ["Test Message 1", "Test Message 2"];
        fixture.detectChanges();

        const compiled = fixture.nativeElement;
        const messagesDiv = compiled.querySelectorAll("div.msg");

        expect(messagesDiv.length).toBe(2);
        expect(messagesDiv[0].textContent).toContain("Test Message 1");
        expect(messagesDiv[1].textContent).toContain("Test Message 2");
    });
});
